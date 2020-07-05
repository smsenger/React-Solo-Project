import React, { useState } from 'react'
import ReactDOM from "react-dom";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Button from 'react-bootstrap/Button'
import './Notes.css'

export default function Emoji() {
    const [emojiPickerState, SetEmojiPicker] = useState(false);
    const [message, SetMessage] = useState("");
    
    let emojiPicker;
    if (emojiPickerState) {
        emojiPicker = (
            <Picker
            title="Pick your emoji…"
            emoji="point_up"
            onSelect={emoji => SetMessage(message + emoji.native)}
            />
            );
        }
    
    function triggerPicker(event) {
        event.preventDefault();
        SetEmojiPicker(!emojiPickerState);
    }
    return (
        <div style={{display: 'flex'}}>
               <textarea
                 className="f4 fw7 dib pa2 no-underline ba b--black-20 w-100 emoji-input"
                 value={message}
                 disabled
                 placeholder='😁'
                 style={{backgroundColor: '#63d4fa', resize: 'none', height: '40px', marginTop:'-5px'}}
   
               > </textarea>
               <br></br>
               {emojiPicker}
                        <Button
                            className="card-button3"
                            onClick={triggerPicker}
                            style={{height: '40px', marginTop:'-5px', marginLeft: '0px'}}
                        >  
                            <span role="img" aria-label="">
                                😁
                            </span>
                        </Button>
                        <div className="measure">
          </div>
        </div>
    )
}
