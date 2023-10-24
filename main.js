const currentUser = localStorage.getItem('currentUser')

if(currentUser){
    let prevText = $('h1').text()
    $('h1').text(prevText + currentUser)
    $('#login').css('display', 'none')
    $('#register').css('display', 'none')
    $('#logout').css('display', 'inline-block')
    $('#todos').show()
}

$('#logout').click(function(){
    $('h1').text('User: ')
    $('#logout').css('display', 'none')
    $('#login').css('display', 'inline-block')
    $('#register').css('display', 'inline-block')
    localStorage.removeItem('currentUser')
})