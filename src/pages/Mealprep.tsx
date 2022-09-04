import { Recipetype, DataMap, Kanbanobj } from "../interfaces";
import { DragDropContext } from "react-beautiful-dnd";
import React, { useState, useEffect } from "react";
import { reorderData } from "../modules/reorder";
import { AuthorList } from "../modules/AuthorList";
import { v4 as uuidv4 } from "uuid";

const Mealprep = (props: { prep: Recipetype }) => {
  const { prep } = props;

  const initialdata = {
    Preparation: [],
    Ongoing: [],
    Finished: [],
  };

  const [dataMap, setdata] = useState<DataMap>(initialdata);

  useEffect(() => {
    console.log("Meal prep accessed?");
    const ingredients: string[] = ["<<Ingredients | Measures>>\n"];
    for (let i = 0; i < prep.arringredients.length; i++) {
      ingredients.push(`${prep.arringredients[i]} | ${prep.arrmeasure[i]}`);
    }
    const new_ingredients = ingredients.join(`\n`);
    const pushing = [new_ingredients];

    const instructions = prep.strInstructions
      .split(`\r\n`)
      .filter((string) => string != "" || string.length > 10);
    instructions.map((text, index) => pushing.push(`${index + 1}: ${text}`));

    const finalpush = pushing.map((str) => {
      return { id: uuidv4(), text: str };
    });

    const dataclone: DataMap = structuredClone(dataMap);
    dataclone.Preparation = structuredClone(finalpush);
    setdata(dataclone);
    console.dir(dataclone); //  Debug
  }, [prep]);

  const onChangeprep = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = structuredClone(dataMap);
    if (event.target.value == "") {
      newValue.Preparation.splice(
        newValue.Preparation.indexOf(
          newValue.Preparation.find((x: Kanbanobj) => x.id == event.target.id)
        ),
        1
      );
      setdata(newValue);
    } else {
      newValue.Preparation.find(
        (x: Kanbanobj) => x.id == event.target.id
      ).text = event.target.value;
      setdata(newValue);
    }
  };

  const onChangeongo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = structuredClone(dataMap);
    if (event.target.value == "") {
      newValue.Ongoing.splice(
        newValue.Ongoing.indexOf(
          newValue.Ongoing.find((x: Kanbanobj) => x.id == event.target.id)
        ),
        1
      );
      setdata(newValue);
    } else {
      newValue.Ongoing.find((x: Kanbanobj) => x.id == event.target.id).text =
        event.target.value;
      setdata(newValue);
    }
  };

  const onChangefin = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = structuredClone(dataMap);
    if (event.target.value == "") {
      newValue.Finished.splice(
        newValue.Finished.indexOf(
          newValue.Finished.find((x: Kanbanobj) => x.id == event.target.id)
        ),
        1
      );
      setdata(newValue);
    } else {
      newValue.Finished.find((x: Kanbanobj) => x.id == event.target.id).text =
        event.target.value;
      setdata(newValue);
    }
  };

  const addnote = () => {
    const newData: DataMap = structuredClone(dataMap);
    newData.Preparation.push({ id: uuidv4(), text: "New Data" });
    setdata(newData);
    console.log("Added new note");
  };

  return (
    <div>
      {/* Title */}
      <div>
        <h1
          style={{ fontFamily: "Yeseva" }}
          className="text-3xl text-center font-bold mt-4 underline"
        >
          Mealprep
        </h1>
      </div>
      {/* Kanban Mess */}
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          if (!destination) {
            return;
          }
          setdata(reorderData(dataMap, source, destination));
        }}
      >
        <div
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="text-2xl text-center font-bold mb-4">
                Preparation
              </h2>
              <button
                onClick={addnote}
                className="text-1xl font-bold hover:opacity-50"
                style={{
                  margin: " 0 2rem",
                  backgroundColor: "#00FFFF",
                  padding: "0.2rem 0.5rem",
                  border: "1.5px solid #6495ED",
                  borderRadius: "1rem",
                  boxShadow: "1px 2px #6495ED",
                }}
              >
                + New Note +
              </button>
            </div>
            <AuthorList
              internalScroll
              key={"Preparation"}
              listId={"Preparation"}
              listType="CARD"
              datas={dataMap.Preparation}
              onChange={onChangeprep}
              setdata={setdata}
            />
          </div>
          <div>
            <h2 className="text-2xl text-center font-bold mb-4">Ongoing</h2>
            <AuthorList
              internalScroll
              key={"Ongoing"}
              listId={"Ongoing"}
              listType="CARD"
              datas={dataMap.Ongoing}
              onChange={onChangeongo}
              setdata={setdata}
            />
          </div>
          <div>
            <h2 className="text-2xl text-center font-bold mb-4">Finished</h2>
            <AuthorList
              internalScroll
              key={"Finished"}
              listId={"Finished"}
              listType="CARD"
              datas={dataMap.Finished}
              onChange={onChangefin}
              setdata={setdata}
            />
          </div>
          {/* {Object.entries(dataMap).map(([key, value]) => {
            return (
              <AuthorList
                internalScroll
                key={key}
                listId={key}
                listType="CARD"
                datas={value}
              />
            );
          })} */}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Mealprep;
