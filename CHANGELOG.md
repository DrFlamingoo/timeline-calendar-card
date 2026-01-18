# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-18

### Added
- Initial release of Timeline Calendar Card
- 24-hour horizontal timeline view (2 AM to 2 AM)
- Masonry-style event layout for overlapping events
- Simple day/night gradient background
- Support for multiple caldav calendars
- TypeScript implementation with full type safety
- Comprehensive test suite (15 tests, 100% pass rate)
- Home Assistant Lovelace integration
- HACS support for easy installation

### Features
- Event display with title, duration-based width
- Automatic column assignment for overlapping events
- 24-hour format time display
- Responsive layout (ultra-wide screens)
- Hover effects and transitions on events
- Event color differentiation

### Technical
- Built with Lit framework (Home Assistant standard)
- Jest test framework with TDD approach
- TypeScript strict mode compilation
- GitHub Actions CI/CD pipeline
- Webpack bundling for distribution
