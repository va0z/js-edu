/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      var res = 0;
      var maxHours = 800 + 500;
      if (knowsProgramming == true) {
        maxHours = maxHours - 500;
      }
      res = maxHours / config[focus];       
      res = Math.ceil(res);
  
      return res;
  };
  