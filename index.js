export const SHARED_PACKAGE_VERSION = '0.2.5'

export function getPackageLabel() {
  return `@korshundeveloper/renovate-shared-utils@${SHARED_PACKAGE_VERSION}`
}

export function makeBadge(appName) {
  return `${appName} uses ${getPackageLabel()}`
}
