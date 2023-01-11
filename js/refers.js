window.addEventListener('load', function() {
  var a_href = 'https://20media.world/br/registration/pop?bonusType=sport';
  var tc_className = 'general__link'
  var tc_href = 'https://20media.world/br/information/bonus-terms';
  var idRefer = $_GET('refer');
  
  if (window.location.search !== '') {
    if ($_GET('refer') !== false) {
      a_href += '/refer/' + idRefer;
      tc_href += '/refer/' + idRefer;
    } else {
      a_href += '&' + extractGetParameters(window.location.search);
      tc_href += '?' + extractGetParameters(window.location.search);
    }
  }
  
  function extractGetParameters(queryParams) {
    return queryParams.slice(1);
  }
  
  function $_GET(key) {
    var p = window.location.search;
    p = p.match(new RegExp(key + '=([^&=]+)'));
    return p ? p[1] : false;
  }
  
  document.querySelectorAll('a').forEach(function (item) {
    if (item.className.indexOf('not-change') === -1) {
      item.setAttribute('href', a_href);
    }
    if (item.className.indexOf(tc_className) !== -1) {
      item.setAttribute('href', tc_href) 
    }
  });
});