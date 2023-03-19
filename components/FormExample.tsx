import React from "react";

export default function FormExample() {
  return (
    <div className="">
      <form
        action="/api/form"
        method="post"
        className="flex flex-col space-y-4"
      >
        <label htmlFor="first">First name:</label>
        <input
          type="text"
          name="first"
          id="first"
          className="border text-black"
        />
        <label htmlFor="last">Last name:</label>
        <input
          type="text"
          name="last"
          id="last"
          className="border text-black"
        />
        <button type="submit" className="bg-blue-400 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
