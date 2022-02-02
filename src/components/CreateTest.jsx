import { useMemo, useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { useCreateTestMutation } from '../redux/services/testify';
import { useSelector } from 'react-redux';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

function DropFile({fileHandler}) {
    const onDrop = useCallback((acceptedFiles) => {
        fileHandler(acceptedFiles)   
    }, [fileHandler])

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone({onDrop, multiple: true, maxFiles: 2});

      const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
      const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);

      console.log("ACCEPTED", acceptedFiles)      
      return (
        <div className="container">
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
        </div>
      );
}

function CreateTest() {   
    const [title, setTitle] = useState('')
    const [files, setFiles] = useState([])
    const { user } = useSelector((state) => state.auth)
    const [createTest, {isLoading}] = useCreateTestMutation()
    const clickHandler = () => {
        createTest({id: user._id, test: {title, files}})
    }

    const fileHandler = (files) => {
        setFiles(files)
    }

    const changeHandler = (e) => {
        setTitle(e.target.value)
    }
    console.log("FILES", files)
    return (
        <div className="container">
            Test
            <input value={title} onChange={changeHandler}/>
            <DropFile fileHandler={fileHandler}/>
            <button onClick={clickHandler}>Create test</button>
        </div>
    );
}



export default CreateTest;