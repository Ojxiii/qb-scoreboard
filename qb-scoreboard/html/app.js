var _0xcb0171=_0x1508;(function(_0x34b37a,_0xb6aa2d){var _0x113f5c=_0x1508,_0x317121=_0x34b37a();while(!![]){try{var _0x4c94f4=-parseInt(_0x113f5c(0x7c))/0x1*(parseInt(_0x113f5c(0x88))/0x2)+parseInt(_0x113f5c(0x80))/0x3+parseInt(_0x113f5c(0x7e))/0x4+-parseInt(_0x113f5c(0x85))/0x5*(parseInt(_0x113f5c(0x87))/0x6)+parseInt(_0x113f5c(0x7a))/0x7+parseInt(_0x113f5c(0x81))/0x8*(-parseInt(_0x113f5c(0x73))/0x9)+parseInt(_0x113f5c(0x74))/0xa*(parseInt(_0x113f5c(0x8a))/0xb);if(_0x4c94f4===_0xb6aa2d)break;else _0x317121['push'](_0x317121['shift']());}catch(_0x5e7a75){_0x317121['push'](_0x317121['shift']());}}}(_0x1049,0xe7bb3),window[_0xcb0171(0x79)](_0xcb0171(0x8c),_0x121a2b=>{var _0x4cc64=_0xcb0171;switch(_0x121a2b['data'][_0x4cc64(0x83)]){case _0x4cc64(0x7d):Open(_0x121a2b[_0x4cc64(0x78)]);break;case'close':Close();break;case'setup':Setup(_0x121a2b[_0x4cc64(0x78)]);break;}}));function _0x1508(_0x592b03,_0x33c00b){var _0x104998=_0x1049();return _0x1508=function(_0x1508eb,_0x638ab1){_0x1508eb=_0x1508eb-0x71;var _0x407c00=_0x104998[_0x1508eb];return _0x407c00;},_0x1508(_0x592b03,_0x33c00b);}function _0x1049(){var _0x57ac2e=['8411415VCtluA','<i\x20style=\x22color:\x20#dc143c\x22\x20class=\x22fas\x20fa-circle-xmark\x22></i>','6xnFLXI','38jYPMqZ','.info-beam-status','275YXmHQZ','html','message','find','#total-players','<p>','currentCops','3096rHECTv','1059880MlEMYZ','requiredCops','fadeIn','.scoreboard-info','data','addEventListener','2420579fTZACM','.scoreboard-block','12766EoBklT','open','591848DChkGX','minimumPolice','569367FPIBBH','10680tKpzAe','<i\x20style=\x22color:\x20#28a745\x22\x20class=\x22fas\x20fa-circle-check\x22></i>','action','</p>'];_0x1049=function(){return _0x57ac2e;};return _0x1049();}const Open=_0x131872=>{var _0x39794a=_0xcb0171;$(_0x39794a(0x7b))[_0x39794a(0x76)](0x96),$(_0x39794a(0x8e))[_0x39794a(0x8b)](_0x39794a(0x71)+_0x131872['players']+_0x39794a(0x84)),$['each'](_0x131872[_0x39794a(0x75)],(_0x356644,_0x1a5846)=>{var _0x16327b=_0x39794a,_0x1441e4=$(_0x16327b(0x77))['find']('[data-type=\x22'+_0x356644+'\x22]'),_0x4e3278=$(_0x1441e4)[_0x16327b(0x8d)](_0x16327b(0x89));if(_0x1a5846['busy'])$(_0x4e3278)[_0x16327b(0x8b)]('<i\x20style=\x22color:\x20#2873a7\x22\x20class=\x22fas\x20fa-circle-pause\x22></i>');else{if(_0x131872[_0x16327b(0x72)]>=_0x1a5846[_0x16327b(0x7f)])$(_0x4e3278)[_0x16327b(0x8b)](_0x16327b(0x82));else $(_0x4e3278)[_0x16327b(0x8b)](_0x16327b(0x86));}});},Close=()=>{var _0x56abf8=_0xcb0171;$(_0x56abf8(0x7b))['fadeOut'](0x96);};

const Setup = (data) => {
  let scoreboardHtml = "";
  $.each(data.items, (index, value) => {
    scoreboardHtml += `
      <div class="scoreboard-info-beam" data-type=${index}>
        <div class="info-beam-title">
        <p><i class="fad fa-mask"></i> ${value}</p>
        </div>
        <div class="info-beam-status"></div>
      </div>
    `;
  });
  scoreboardHtml += `
    <div class="scoreboard-info-beam" style="background: #1aa1b3">
      <div class="info-beam-title-players">
        <p><i class="fad fa-users"></i> Online Players</p>
      </div>
      <div class="info-beam-title-players-status" id="total-players" style="color: #ededed"></div>
    </div>
  `;
  $(".scoreboard-info").html(scoreboardHtml);
};


