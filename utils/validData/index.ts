export function validateURLAvatar(url: string | undefined | null) {
    if (!url || url.trim() === "") {
        return "/images/avatar)1.jpg"
    }

    try {
        new URL(url)
        return url
    } catch (err) {
        return "/images/avatar_1.jpg"
    }
}