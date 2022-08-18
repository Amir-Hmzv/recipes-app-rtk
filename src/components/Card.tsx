import React, { FC } from 'react';
import {MDBCol,MDBCardGroup,MDBCard,MDBCardBody,MDBCardImage} from "mdb-react-ui-kit"

interface  propsFunction {
    recipe :any
    toggleSHow : (item:any) => void
}

const Card:FC<propsFunction> = ({recipe,toggleSHow}) => {
    return (
        <MDBCol>
            <MDBCardGroup>
                <MDBCard className='h-10 mt-2 d-sm-flex'> 
                    <MDBCardImage
                    src={recipe.image}
                    alt={recipe.label}
                    position='top'
                    style={{cursor:'pointer'}}
                    onClick={() => toggleSHow(recipe)}
                    />
                    <MDBCardBody>
                        <h5 className="fw-bold">{recipe.label}</h5>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBCol>
            
    
    );
};

export default Card;