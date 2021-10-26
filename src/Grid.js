import React from 'react';

const ToBeCalledVariable = (corrData, config) => { 
  return config[3].component({ data: corrData.Trailer })
}
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
        <td>{ToBeCalledVariable(corrData, config)}</td> 
      </tr>)}
    </tbody>
  </table>
);

export default Grid;