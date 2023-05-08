import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchFilesData } from "../../store/actions/fileDataActions";
import { FileTable, CustomNavbar } from "../components";

const App = () => {
    const [filter, setFilter] = useState("");
    const filesData = useSelector((state) => state.fileData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilesData());
    }, [dispatch]);

    const filteredFilesData = filesData.filter((fileData) => fileData.file.includes(filter));

    return (
        <div>
            <CustomNavbar filter={filter} setFilter={setFilter} />
            <FileTable filesData={filteredFilesData} />
        </div>
    );
};

export default App;