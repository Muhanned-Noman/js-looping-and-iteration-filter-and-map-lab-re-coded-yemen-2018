// Code your solution here:
function driversWithRevenueOver(array, string){
  return array.filter(function(elment){
    return elment.revenue > string;
  });
};
