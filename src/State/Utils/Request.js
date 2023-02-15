import tokenHasExpire from './tokenHasExpire';

const _apiHost = '';

const objectToQueryString = obj => {
    return Object.keys(obj)
        .map(key => key + '=' + obj[key])
        .join('&');
};

const generateErrorResponse = error => {
    return {
        status: 'error',
        code: error.status,
        message: error.statusText,
    };
};

const handleResponse = async response => {
    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
        } else if (response.status === 500 && global.window) {
            // clear cookie;
            // global.window.location.href = window.location.hostname;
        }
        const error = response;
        return generateErrorResponse(error);
    }
    return response.text().then(text => {
        return text && JSON.parse(text);
    });
};

const request = async (url, params, method = 'GET') => {
    const options = {
        method,
        // headers: authHeader(),
    };
    if (params) {
        if (params.header) {
            options.headers = params.header;
            // deleting the header attribute because it isn't needed anymore
            delete params.header;
        }
        if (method === 'GET' && Object.keys(params).length !== 0) {
            url += '?' + objectToQueryString(params);
        } else {
            options.body = JSON.stringify(params.body);
        }
    }
    console.log("_apiHost + url, options", _apiHost + url, options)
    const response = await fetch(_apiHost + url, options);

    return handleResponse(response);
};

const requestRedirectUri = async (url, params, method = 'POST') => {
    const options = {
        method,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    };

    options.body = params.body;

    const response = await fetch(_apiHost + url, options);

    return handleResponse(response);
};

const requestLogin = async (url, params, method = 'POST') => {
    const options = {
        method,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    };

    options.body = params.body;

    const response = await fetch(_apiHost + url, options);

    return handleResponse(response);
};

const login = (url, params) => {
    return requestLogin(url, params);
};

const logout = async () => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: {
            data: {
                // idToken: tokenId,
                postLogoutRedirectUri: 'http://www.gr',
                // postLogoutRedirectUri: config.redirectUri,
            },
        },
    };
    const url = '/oauth2/logout';

    if (typeof options.body !== 'string' || !(options.body instanceof String)) {
        options.body = JSON.stringify(options.body);
    }

    const response = await fetch(_apiHost + url, options);

    // eslint-disable-next-line no-restricted-globals
    return handleResponse(response);
};

const get = async (url, params) => {
    if (tokenHasExpire()) {
        // await refreshToken();
    }

    return request(url, params);
};

const post = async (url, params) => {
    if (tokenHasExpire()) {
        // await refreshToken();
    }
    return request(url, params, 'POST');
};

const put = async (url, params) => {
    return request(url, params, 'PUT');
};

const remove = async (url, params) => {
    if (tokenHasExpire()) {
        // await refreshToken();
    }
    return request(url, params, 'DELETE');
};

export default {
    requestRedirectUri,
    login,
    logout,
    get,
    post,
    put,
    remove,
};
