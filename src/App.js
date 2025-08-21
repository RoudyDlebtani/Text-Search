import './App.css';
import { useState } from 'react';

const articleText = `
Understanding the difference between grid-template and grid-auto
09 October 2018

#css

With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to do with the explicit and implicit grid systems, at face value they seemed to be doing almost the same thing. In actual fact, they have little in common and are used to achieve different things.

What are explicit and implicit grids? #
To understand the difference between the grid-template-* and grid-auto-* properties we first need to understand the difference between the explicit and implicit grids.

The definitions of explicit and implicit grids can be a bit circular. The explicit grid, for example, is defined by the property used to create the explicit grid - the grid-template-* properties. According to the W3C Candidate Recommendation:

The three properties grid-template-rows, grid-template-columns, and grid-template-areas together define the explicit grid.

The implicit grid, on the other hand, is essentially defined as "everything else" -

When grid items are positioned outside of [the explicit grid], the grid container generates implicit grid tracks by adding implicit grid lines to the grid. These lines together with the explicit grid form the implicit grid.

Although these definitions may be a bit difficult to conceptualise at first, it can be helpful to rephrase it.

Within a grid container, there are grid cells. Any cell positioned and sized using the grid-template-* properties forms part of the explicit grid. Any grid cell that is not positioned/sized using this property forms part of the implicit grid instead.

How do the grid-template and grid-auto properties differ? #
Because the structure and syntax of the grid-template-* and grid-auto-* property names have some similarities, it can be easy to think the values they accept and therefore what they achieve, are similar as well. On the contrary, these properties are doing very different things.

While the grid-template-* properties are used to define both the position and size of grid cells, the grid-auto-* properties are used only to define the size of grid cells.

This difference becomes apparent when you consider what these properties are for. The grid-template-* properties are used to create an explicit grid, whereas th grid-auto-* properties are used to size an implicit grid (which is automatically created).

How grid-template works #
There are four grid-template-* properties - grid-template-rows, grid-template-columns, grid-template-areas, and grid-template - the last being a shorthand for the first three. For the purpose of this article, I'm going to focus on the first two.

Let's take grid-template-rows. If we want to create a grid with one row of 100px height, we would use the following CSS -
`;

function App() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value) {
      setCount(0);
      return;
    }

    const regex = new RegExp(`\\b${value}\\b`, 'gi');
    const matches = articleText.match(regex);
    setCount(matches?.length || 0);
  };

  return (
    <div className='bigApp'>
    <div className="App">
      <h1>Search</h1>
      <input
        style={{ width: '50%' }}
        value={search}
        onChange={handleChange}
        placeholder="Type a word..."
      />
      <p>Occurrences: {count}</p>

      <article>
        <h1>Understanding the difference between grid-template and grid-auto</h1>
        <p>09 October 2018</p>
        <p>#css</p>

        <p>
          With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to do with the explicit and implicit grid systems, at face value they seemed to be doing almost the same thing. In actual fact, they have little in common and are used to achieve different things.
        </p>

        <h2>What are explicit and implicit grids?</h2>
        <p>To understand the difference between the grid-template-* and grid-auto-* properties we first need to understand the difference between the explicit and implicit grids.</p>
        <p>The definitions of explicit and implicit grids can be a bit circular...</p>

        <h2>How do the grid-template and grid-auto properties differ?</h2>
        <p>Because the structure and syntax of the grid-template-* and grid-auto-* property names have some similarities...</p>

        <h2>How grid-template works</h2>
        <p>There are four grid-template-* properties - grid-template-rows, grid-template-columns, grid-template-areas, and grid-template...</p>
      </article>
    </div>
    <div className='smallAppBox'>
      <p><b>bitsoftcode.</b> Articles on Frontend Development. All articles are written by Ire Aderinokun, FrontEnd Developer and User Interface Desinger.</p>
    
  <a href="https://x.com/ireaderinokun" target="_blank" class="twitter-badge">

  <span class="twitter-name">Follow @ireaderinokun</span>
  <span class="twitter-followers">19.1K followers</span>
</a>

    </div>
    </div>
  );
}

export default App;
