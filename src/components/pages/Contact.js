import React from 'react';

export default function Contact() {
  return (
    <div>
      <form action="hello">
        Name:
        <input type="text"></input>
        Email:
        <input type="text"></input>
        Message:
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
