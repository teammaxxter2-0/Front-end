import NavBar from "./navbar";
import {Button, Container} from "reactstrap";
import {useState} from "react";

const OffertePagina = () => {
    const addItem = () => {
        const newItem: item = {
            Name: "New Item",
            Description: "Description",
        };
        setOfferte(prevState => ({
            ...prevState,
            Items: [...prevState.Items, newItem],
        }));
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handleNameSubmit = (e) => {
        e.preventDefault();
        const newName = e.target.name.value;
        setOfferte(prevState => ({...prevState, Name: newName}));
    };

    const [Offerte, setOfferte] = useState<offerte>({
        Name: "",
        Date: new Date(),
        Items: [],
    });

    return <>
        <NavBar />
        <Container className={"text-center"}>
            {Offerte.Name === "" ?
                <>
                    <form onSubmit={handleNameSubmit}>
                        <input name={"name"} type={"text"} placeholder="Enter the name"/>
                        <button type="submit">Submit</button>
                    </form>
                </> :
                <>
                    <h1>{Offerte.Name}</h1>
                    <p>{Offerte.Date.toDateString()}</p>
                    <table className={"table table-bordered table-striped mx-auto"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Offerte.Items.map((item) => <tr>
                            <td>{item.Name}</td>
                            <td>{item.Description}</td>
                        </tr>)}
                        </tbody>
                    </table>
                    <Button onClick={addItem}>Add item</Button>
                </>
            }
        </Container>
    </>
}

export default OffertePagina;