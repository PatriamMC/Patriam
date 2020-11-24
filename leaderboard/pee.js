// array describing the color for each team
// using camel case where the team names include a space
const colors = {
  black: '#000000',
  dark_blue: '#0000AA',
  dark_green: '#00AA00',
  dark_aqua: '#00AAAA',
  dark_red: '#AA0000',
  dark_purple: '#AA00AA',
  gold: '#FFAA00',
  gray: '#AAAAAA',
  dark_gray: '#555555',
  blue: '#5555FF',
  green: '#55FF55',
  aqua: '#55FFFF',
  red: '#FF5555',
  light_purple: '#FF55FF',
  yellow: '#FFFF55',
  white: '#FFFFFF'

}

// array describing the drivers, sorted by position and with a gap describing the distance from the leading driver
const leaderboard = [
  {
    name: 'Placeholder ★',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder ★',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder ★',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
  {
    name: 'Placeholder',
    team: 'gray',
    gap: '0'
  },
];

// target the table element in which to add one div for each driver
const main = d3
  .select('table');

// for each driver add one table row
// ! add a class to the row to differentiate the rows from the existing one
// otherwise the select method would target the existing one and include one row less than the required amount
const drivers = main
  .selectAll('tr.driver')
  .data(leaderboard)
  .enter()
  .append('tr')
  .attr('class', 'driver');

// in each row add the information specified by the dataset in td elements
// specify a class to style the elements differently with CSS

// position using the index of the data points
drivers
  .append('td')
  .text((d, i) => i + 1)
  .attr('class', 'position');


// name followed by the team
drivers
  .append('td')
  // include the last name in a separate element to style it differently
  // include the team also in another element for the same reason
  .html (({name, team}) => `${name.split(' ').map((part, index) => index > 0 ? `<strong>${part}</strong>` : `${part}`).join(' ')}`)
  // include a border with the color matching the team
  .style('border-left', ({team}) => {
    // find the color using the string value found in d.team
    // ! if the string value has a space, camelCase the value
    const color = team.split(' ').map((word, index) => index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : `${word}` ).join('');
    return `4px solid ${colors[color]}`;
  })
  .attr('class', 'driver');

// gap from the first driver
drivers
  .append('td')
  .attr('class', 'gap')
  .append('span')
  .text(({gap}) => gap);
