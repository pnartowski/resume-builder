import './App.scss';
import jsYaml from 'js-yaml';
import {TemplateA} from "./templates/templateA/TemplateA";
import {useEffect, useState} from "react";
import {ResumeData} from './model'
import {ContextGenerator} from "./templates/context/ContextGenerator";


function App() {

    const [data, setData] = useState<ResumeData>(null);
    const context = false;

    useEffect(() => {
        fetch('/data.yaml')
            .then(response => response.text())
            .then(data => {
                const info = jsYaml.load(data) as ResumeData
                setData(info);
            });
    }, []);


    return (
        <div className="App">
            { !context && data != null && <TemplateA data={data}/> }
            { context && <ContextGenerator data={data}/>}
            <div className="footer">
                <div>
                    This document was created by React App
                </div>
                <div>
                    https://github.com/pnartowski/resume-builder
                </div>
            </div>
        </div>
    );
}

export default App;
