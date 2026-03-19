export const SHARED_PACKAGE_VERSION = '0.2.2'

export function getPackageLabel() {
  return `renovate-shared-utils@${SHARED_PACKAGE_VERSION}`
}

export function makeBadge(appName) {
  return `${appName} uses ${getPackageLabel()}`
}
