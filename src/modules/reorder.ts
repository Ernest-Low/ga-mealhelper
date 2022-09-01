import { DraggableLocation } from "react-beautiful-dnd";
import { DataMap } from "../interfaces";

export const reorder = (
  list: any[],
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderData = (
  data: DataMap,
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...data[source.droppableId]];
  const next = [...data[destination.droppableId]];
  const target = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return { ...data, [source.droppableId]: reordered };
  }

  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  return {
    ...data,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };
};
