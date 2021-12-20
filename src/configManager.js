export const getConfig = (environment) => {
    let accessToken = '';

    if(environment === 'staging'){
        accessToken = process.env.STAGING_ACCESS_TOKEN
    }else{
        accessToken = process.env.MASTER_ACCESS_TOKEN
    }

    return{
        accessToken,
        spaceId : process.env.REACT_APP_SPACE_ID,
        environment
    }
}