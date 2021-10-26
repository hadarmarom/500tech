import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((corrConfig, idx) => <th key={idx}>{corrConfig.field}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map((corrData) => <tr key={corrData.imdbID}>
        <td>{corrData.imdbID}</td>
        <td>{corrData.Title}</td>
        <td>{corrData.imdbRating}</td>
        <td>{config[3].component(corrData)}</td>
      </tr>)}
    </tbody>
  </table>
);

export default Grid;