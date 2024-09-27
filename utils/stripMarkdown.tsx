export const stripMarkdown = (text: string): string => {
    return text
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`[^`]*`/g, '')
        .replace(/#+\s/g, '')
        .replace(/[*_~`]/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[.*?\]\(.*?\)/g, '')
        .replace(/- /g, '')
        .replace(/>\s/g, '')
        .replace(/\n+/g, ' ')
        .trim();
};