import React from 'react';
import {Glyphicon} from 'react-bootstrap';

const Contact = () => {
    return <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '1024px', minWidth: '320px', padding: '10px'}}>
                <h1 style={{textAlign: 'center'}}>Contact</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '320px', marginTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <span><Glyphicon glyph='earphone'
                                                 style={{marginRight: '10px'}}/>06 XX XX XX XX</span><br/>
                                <span><Glyphicon glyph='envelope'
                                                 style={{marginRight: '10px'}}/>prenom.nom@mail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Contact;