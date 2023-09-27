export function constructImageUrl(url: string, enableHttps: boolean = true) {
  if (url.startsWith('//')) {
    let protocol = '';
    if (enableHttps) protocol = 'https:';
    else protocol = window?.location?.protocol || 'https:';
    return `${protocol}${url}`;
  }
  return url;
}
