const TableHeader = (props) => {
    const bgHover = "bg-primary";

    function dragStart(e) {
        e.dataTransfer.setData("id", props.id);
    }

    function dragExit(e) {
        e.target.classList.remove(bgHover);
    }

    function allowDrop(e) {
        e.preventDefault();
        e.target.classList.add(bgHover);
    }

    return (
        <th onDragOver={allowDrop} onDragStart={dragStart} onDragLeave={dragExit} draggable={true} onDragExit={dragExit} id={props.id}>
            {props.name}
        </th>
    )
};

export default TableHeader;