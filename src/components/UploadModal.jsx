import Modal from 'react-modal'
import { useMemo, useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { useUploadMediaMutation } from '../redux/services/testify';
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

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

function UploadModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [convertedFiles, setFiles] = useState(null)
    const { user } = useSelector((state) => state.auth)
    const [uploadMedia, {isLoading}] = useUploadMediaMutation()
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.readAsDataURL(file)
          reader.onload = () => {
          // Do whatever you want with the file contents
            const binaryStr = reader.result
            setFiles({files: binaryStr, title: file.name})
          }
        })
        
      }, [])
    
        const {
            acceptedFiles,
            getRootProps,
            getInputProps,
            isFocused,
            isDragAccept,
            isDragReject
          } = useDropzone({onDrop, multiple: true, maxFiles: 2});

          const submitHandler = () => {
            uploadMedia({id: user._id, files: convertedFiles})
          }
    
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

    return (
        <div>
            <button onClick={openModal}>Upload Media</button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
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
                <button onClick={() => submitHandler()}>Upload</button>
            </Modal>
        </div>
    );
}

export default UploadModal;