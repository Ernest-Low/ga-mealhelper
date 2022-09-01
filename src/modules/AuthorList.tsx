import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";
import { DataMap, Kanbanobj } from "../interfaces";

interface Props {
  datas: Kanbanobj[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
  onChange: (type: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setdata: (type: DataMap) => void;
}

export class AuthorList extends React.Component<Props> {
  static defaultProps = {
    isCombineEnabled: false,
  };
  renderBoard = (dropProvided: DroppableProvided) => {
    const { datas, onChange, setdata } = this.props;

    // Taking both params from onClick and onBlur
    const updatearea = (event: any) => {
      console.log("updating height");
      event.target.style.height = "inherit";
      event.target.style.height = `${event.target.scrollHeight}px`;
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "30rem",
          width: "28%",
          backgroundColor: "#F0FFFF",
          border: "2px solid #00FFFF",
          minHeight: "10rem",
        }}
        ref={dropProvided.innerRef}
      >
        {datas.map((data, index) => (
          <Draggable key={data.id} draggableId={data.id} index={index}>
            {(dragProvided) => (
              <div
                style={{ display: "flex", justifyContent: "center" }}
                {...dragProvided.dragHandleProps}
                {...dragProvided.draggableProps}
                ref={dragProvided.innerRef}
              >
                <textarea
                  id={data.id}
                  onChange={(event) => onChange(event)}
                  onClick={(event) => updatearea(event)}
                  onBlur={(event) => updatearea(event)}
                  style={{
                    whiteSpace: "pre-line",
                    border: "1px solid #00FFFF",
                    padding: "0.5rem",
                    margin: "0.7rem 10%",
                    minWidth: "10rem",
                    width: "80%",
                    minHeight: "6rem",
                    overflow: "hidden",
                    height: "inherit",
                  }}
                  defaultValue={data.text}
                ></textarea>
              </div>
            )}
          </Draggable>
        ))}
        {dropProvided.placeholder}
      </div>
    );
  };

  render() {
    const { listId, listType, internalScroll, isCombineEnabled } = this.props;

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        direction="vertical"
        isCombineEnabled={isCombineEnabled}
      >
        {(dropProvided) => (
          <div {...dropProvided.droppableProps}>
            {internalScroll ? (
              <div>{this.renderBoard(dropProvided)}</div>
            ) : (
              this.renderBoard(dropProvided)
            )}
          </div>
        )}
      </Droppable>
    );
  }
}
