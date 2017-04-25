$.ajax({
    type: 'GET', 
    url: 'https://www.dropbox.com/s/xiey9ies2pul1xi/icon.txt?dl=1',
    success: function (data) {
        $('#icon').attr('src', data.responseText.replace(/<.*?>/g, ''));
    },
    error: function (e) {
        $('#icon').attr('src', './icon.jpg');
    }
});