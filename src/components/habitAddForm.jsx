import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleAdd = (name) => {
    this.state.onAdd(name);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };

  return (
    <div>
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Habit"
          className="add-input"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  );
});

export default HabitAddForm;
