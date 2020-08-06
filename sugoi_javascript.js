$(function(){
    var url = 'http://sugoiweb.nezihiko.com',
	shareText = '縺吶＃縺ЦEB';

    $('.sugoi-btn').mouseout(function(){
	$(this).css('background-position-y',(0 * $(this).height()) + 'px');
    });
    $('.sugoi-btn').mouseover(function(){
	$(this).css('background-position-y',((-1) * $(this).height()) + 'px');
    });
    $('.sugoi-btn').mouseup(function(){
	$(this).css('background-position-y',((-1) * $(this).height()) + 'px');
    });
    $('.sugoi-btn').mousedown(function(){
	$(this).css('background-position-y',((-2) * $(this).height()) + 'px');
    });

    var initialScrollleft = ($('#sugoiSlideshow li').width()*1.5 - $(window).width()/2);
    $('#sugoiSlideshow').scrollLeft(initialScrollleft);

    var elemFirst;
    var domFirst;

    setInterval(function(){
	$('#sugoiSlideshow').animate({
	    scrollLeft: (initialScrollleft + $('#sugoiSlideshow li').width()) + 'px'
	},1000,'easeInOutQuart',function(){
	    elemFirst = $('#sugoiSlideshow li').eq(0);
	    domFirst = '<li>' + elemFirst.html() + '</li>';
	    elemFirst.remove();
	    $('#sugoiSlideshow ul').append(domFirst);
	    $('#sugoiSlideshow').scrollLeft(initialScrollleft);
	});
    },3000);

    $('#sugoiPlaymovie').click(function(){
	$(this).parent().children().remove();
	$('#sugoiMovie').prepend('<iframe width="640" height="460" src="http://www.youtube.com/embed/BXrjXna-_MA?rel=0&autoplay=1" frameborder="0"></iframe>');
    });

    $('.btnShare').click(function(){
	openWin('http://www.facebook.com/share.php?u=' + url, 'facebook_share');
    });

    $('.btnTweet').click(function(){
	openWin(getTwitterUrl(), 'twitter_share');
    });

    function openWin(url, id){
	window.open(url, id, 'width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1');
    }

    function getTwitterUrl() {
	var text = 'http://twitter.com/share?';

	text += 'url=' + encodeURIComponent(url) + '&';
	text += 'text=' + shareText;
	
	return text;
    }
});