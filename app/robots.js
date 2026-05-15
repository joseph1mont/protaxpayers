export default function robots() {
const isVercel = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' || process.env.NEXT_PUBLIC_VERCEL_ENV;

if (isVercel) { //block Google on Vercel Previews
    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
    };
}

//Allow Google on my main Hostinger site    
return {
    rules: {
        userAgent: '*',
        allow: '/',
    },
}
}