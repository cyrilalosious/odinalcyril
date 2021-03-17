function odinalcyril(no){
    if (no == 1 || no == 21 || no == 31) {
        return no + 'st'
      } else if (no == 2 || no == 22) {
        return no + 'nd'
      } else if (no == 3 || no == 23) {
        return no + 'rd'
      } else {
        return no + 'th'
      }
}

module.exports.odinalcyril = odinalcyril;