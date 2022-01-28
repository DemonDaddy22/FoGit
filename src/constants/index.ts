export const COLORS: {
    [key: string]: string;
} = {
    ACCENT_ORANGE: '#EE7C11',
    ACCENT_GREEN: '#83C022',
    ACCENT_PURPLE: '#6844FC',
    ACCENT_PINK: '#F02F75',
    ACCENT_BLUE: '#32BCD1',
    LIGHT: '#FEFEFE',
    DARK: '#191C20',
};

export const GITHUB_BASE_URI: string = 'https://api.github.com/users';

export const PAGE_SIZE: number = 100;

export const GITHUB_URL: string = 'https://github.com/DemonDaddy22';

export const TWITTER_URL: string = 'https://twitter.com/Showstopper_RG';

export const UNSPLASH_URL: string = 'https://unsplash.com/@shades_of_demon';

export const BUY_ME_A_COFFEE_URL: string = `https://www.buymeacoffee.com/rohangupta`;

const GITHUB_CLIENT_ID: string =
    process.env.NODE_ENV === 'development'
        ? 'e93960a9f57c6c916656'
        : '192d5b51ffac16d72830';

const GITHUB_REDIRECT_URL: string =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3030/api/v1/auth/github'
        : 'https://demondaddy-api-den.herokuapp.com/api/v1/auth/github';

export const GITHUB_LOGIN_URL: string = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_url=${GITHUB_REDIRECT_URL}&path=/FoGit&scope=user`;
