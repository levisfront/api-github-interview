const ENDPOINT_GITHUB_USERS = 'https://api.github.com/users/';
const REPOS = '/repos';
const STARRED = '/starred';

$('#button-search').click(function (e) {
    let username = $('#txt-username').val();

    if (validateEmptyField('username', username)) {
        return false;
    }
    searchGitHubUser(username);
});

function searchGitHubUser(username) {
    $('#error-validation-message').find('p').remove();
    $.ajax({
        'url': ENDPOINT_GITHUB_USERS + username,
        'type': 'get',
        success: function (resp) {
            console.log(resp)
            applyDisplayRulesInfoUsersSuccess(resp)
        },
        error: function (resp) {
            console.log(resp);
            applyDisplayRulesInfoUsersError();
        }
    });
}

function getRepos(userName) {
    $('#error-validation-message').find('p').remove();
    $("#content-result-repos tr").remove();
    $.ajax({
        'url': ENDPOINT_GITHUB_USERS + userName + REPOS,
        'type': 'get',
        success: function (resp) {
            console.log(resp)
            applyDisplayRulesInfoReposSuccess(resp);
        },
        error: function (resp) {
            console.log(resp)
            applyDisplayRulesInfoReposError(resp);
        }
    });
}

function getStarredRepositories(userName) {
    $('#error-validation-message').find('p').remove();
    $("#content-result-starred tr").remove();
    $.ajax({
        'url': ENDPOINT_GITHUB_USERS + userName + STARRED,
        'type': 'get',
        success: function (resp) {
            console.log(resp)
            applyDisplayRulesInfoStarredSuccess(resp);
        },
        error: function (resp) {
            console.log(resp)
            applyDisplayRulesInfoStarredError();
        }
    });
}

function applyDisplayRulesInfoUsersSuccess(resp){
    let gitHubUserName = resp.login;
    resp.bio = tableResultFormatter(resp.bio);

    $('#username').text(tableResultFormatter(resp.login));
    $('#bio').text(tableResultFormatter(resp.bio));
    $('#following').text(tableResultFormatter(resp.following));
    $('#followers').text(tableResultFormatter(resp.followers));
    $('#usersince').text(dateFormatter(resp.created_at, 'pt-br'));
    $('#button-repos').attr('onclick', 'getRepos("'+ gitHubUserName +'")');
    $('#button-starred').attr('onclick', 'getStarredRepositories("'+ gitHubUserName +'")');

    $('#repos-content').hide();
    $('#starred-content').hide();
    $('#user-content').show();
    $('#txt-username').val("");
}

function applyDisplayRulesInfoUsersError(){
    $('#error-validation-message').html(
        '<p class="text-danger text-center">Unable to retrieve user information</p>'
    );
}


function applyDisplayRulesInfoReposSuccess(resp){
    $('#content-result-repos').parent().show();
    if (resp.length === 0) {
        $('#content-result-repos').parent().hide();
        $('#error-validation-message').html(
            '<p class="text-danger text-center">No repositories</p>'
        );
    }

    for (var i = 0; i < resp.length; i++) {
        $('#content-result-repos').append(
            '<tr>' +
            '	<th><a href="#" onclick=\'searchGitHubUser("' + resp[i].owner.login + '")\'>' +
                    tableResultFormatter(resp[i].owner.login) + 
                '</a></th>' +   
            '	<th>' + tableResultFormatter(resp[i].name) + '</th>' +
            '	<th>' + tableResultFormatter(resp[i].private) + '</th>' +
            '</tr>'
        );
    }

    $('#user-content').hide();
    $('#starred-content').hide();
    $('#repos-content').show();
    $('#txt-username').val("");
}

function applyDisplayRulesInfoReposError(){
    $('#content-result-repos').parent().hide();
    $('#error-validation-message').html(
        '<p class="text-danger text-center">Unable to retrieve repositories information</p>'
    );
}

function applyDisplayRulesInfoStarredSuccess(resp){
    $('#content-result-starred').parent().show();
    if (resp.length === 0) {
        $('#content-result-starred').parent().hide();
        $('#error-validation-message').html(
            '<p class="text-danger text-center">No starred repositories</p>'
        );
    }

    for (var i = 0; i < resp.length; i++) {
        $('#content-result-starred').append(
            '<tr>' +
            '	<th><a href="#" onclick=\'searchGitHubUser("' + resp[i].owner.login + '")\'>' +
                        tableResultFormatter(resp[i].owner.login) + 
                '</a></th>' +
            '	<th>' + tableResultFormatter(resp[i].description) + '</th>' +
            '</tr>'
        );
    }

    $('#user-content').hide();
    $('#repos-content').hide();
    $('#starred-content').show();
    $('#txt-username').val("");
}

function applyDisplayRulesInfoStarredError(){
    $('#content-result-starred').parent().hide();
    $('#error-validation-message').html(
        '<p class="text-danger text-center">Unable to retrieve starred repositories information</p>'
    );
}

function dateFormatter(date, format) {
    if (format == 'pt-br') {
        return (date.substr(0, 10).split('-').reverse().join('/'));
    } else {
        return (date.substr(0, 10).split('/').reverse().join('-'));
    }
}

function validateEmptyField(field, content) {
    if (content === '') {
        $('#error-validation-message').html(
            '<p class="text-danger text-center">' + field.toUpperCase() + ' must be informed</p>'
        );
        return true;
    }
}

function tableResultFormatter(content) {
    return content === null ? '-' : content;
}