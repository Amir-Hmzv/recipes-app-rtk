import React, { FC } from 'react';
import {MDBModal,MDBModalDialog,MDBModalBody,MDBModalHeader,MDBBtn,MDBModalFooter, MDBModalContent} from "mdb-react-ui-kit"


interface  propsFunction {
    toggleSHow: (item:any) => void
    recipe: any
    setShow: any
    show:boolean 
}



const Modal:FC<propsFunction> = ({toggleSHow,recipe,setShow,show}) => {
    return (
        <MDBModal show={show} setShow={setShow}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <h5 className='fw-bold'>{recipe.label}</h5>
                        <MDBBtn className='btn-close' color='none' onClick={toggleSHow} ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <img src={recipe.image} alt={recipe.label}/>
                        <div className="mt-2">
                            <h5 className="text-start fw-bold text-muted" style={{float:'left'}}>
                                Colories : 
                            </h5>
                            <h5 className='text-start'>{recipe.calories}Kacal</h5>
                            <h5 className='text-start fw-bold text-muted'>
                                Ingredints
                            </h5>
                            {
                                recipe.ingredientLines.map((item:any) => (
                                    <li className="text-start">{item}</li>
                                ))
                            }
                        </div>

                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={toggleSHow}>

                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default Modal;