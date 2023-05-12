import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import SortableItems from "./SortableItems";

const TodoList = ({ value }) => {
  const [languages, setLanguages] = useState(["Java", "JavaScript", "Python"]);
  const handleDelete = (language) => {
    setLanguages(languages.filter((item) => item !== language));
  };
  useEffect(() => {
    setLanguages([...languages, value]);
  }, [value]);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(languages, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="p-3" style={{ width: "50%" }} align="center">
        <h3>Languages</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {languages.map((language) => (
            <>
              <SortableItems id={language} key={language} />
              <span>
                <Button
                  variant="primary"
                  onClick={() => handleDelete(language)}
                >
                  Delete
                </Button>
              </span>
            </>
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );
};
export default TodoList;
