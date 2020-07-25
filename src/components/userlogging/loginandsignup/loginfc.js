import React from 'react'

let subTest = (e) => {
    e.preventDefault();
  }

export function Modal(props) {

    return ( 

      <div class={props.show}>
      <div class='modal_box'>
      <div class='toggle_button'>
            <button onClick={props.hide}>hide</button>
          </div>
        <div class='modal_box_content'>
          <div class='header_style'>
        <h2 class='modal_interior_header'>{props.text}</h2>
          </div>
        <div class="login_one_style">
      <input class='login_one' placeholder='Email'/>
        </div> 
        <div class='login_two_style'>
      <input class='login_two' placeholder='Password'/>
        </div>
        <div class='button_center'>
        <button class='login_button' onClick={subTest}>{props.function}</button>
        </div>
          </div>
        </div>
      </div> 
    )
  }

