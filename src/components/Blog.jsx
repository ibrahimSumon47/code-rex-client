import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto">
      {/* Q1 */}
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
          Q1. How does React work?
        </summary>
        <div className="collapse-content">
          <p>
            Ans: React creates a virtual DOM. When state changes in a component
            it firstly runs a "diffing" algorithm, which identifies what has
            changed in the virtual DOM. The second step is reconciliation, where
            it updates the DOM with the results of diff.
          </p>
        </div>
      </details>
      {/* Q2 */}
      <details className=" collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">Q2. What is props in React?</summary>
        <div className="collapse-content">
        <p>
          Ans: Props are inputs to a React component. They are single values or
          objects containing a set of values that are passed to React Components
          on creation using a naming convention similar to HTML-tag attributes.
          i.e, They are data passed down from a parent component to a child
          component. The primary purpose of props in React is to provide
          following component functionality: Pass custom data to your React
          component, Trigger state changes and Use via this.props.reactProp
          inside component's render() method.
        </p>
        </div>
      </details>
      {/* Q3 */}
      <details className=" collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">Q3 What Is Replication In MongoDB?</summary>
        <div className="collapse-content">
        <p>
          Ans: Replication is the process of synchronizing data across multiple
          servers. Replication provides redundancy and increases data
          availability. With multiple copies of data on different database
          servers, replication protects a database from the loss of a single
          server. Replication also allows you to recover from hardware failure
          and service interruptions.
        </p>
        </div>
      </details>
      <details className=" collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">Q4. What are Higher-Order components?</summary>
        <div className="collapse-content">
        <p>
          Ans: A higher-order component (HOC) is a function that takes a
          component and returns a new component. Basically, it’s a pattern that
          is derived from React’s compositional nature We call them as “pure’
          components” because they can accept any dynamically provided child
          component but they won’t modify or copy any behavior from their input
          components.
        </p>
        </div>
      </details>
      <details className=" collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">Q5. What do you mean by Asynchronous API?</summary>
        <div className="collapse-content">
        <p>
          Ans: All APIs of Node.js library are aynchronous that is non-blocking.
          It essentially means a Node.js based server never waits for a API to
          return data. Server moves to next API after calling it and a
          notification mechanism of Events of Node.js helps server to get
          response from the previous API call.
        </p>
        </div>
      </details>
    </div>
  );
};

export default Blog;
