
//鼠标点击img-fluid图片里面 movie_list_bgicon按钮  movie_list_main切换一次视频 （修改路径）



// 鼠标进入img-fluid图片  movie_list_words里面的 p标签和span标签 自下到上透明度展示  默认隐藏
$('.img-fluid').mouseover(function(){
    $(this).parent().siblings('.movie_list_words').animate({bottom:20},1000)
})
//鼠标离开img-fluid图片  movie_list_words里面的 p标签和span标签隐藏
$('.img-fluid').mouseout(function(){
    $(this).parent().siblings('.movie_list_words').slideUp(1000)
})


