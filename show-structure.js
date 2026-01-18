#!/usr/bin/env node

/**
 * Generates a visual tree of the repository structure
 * Shows what gets distributed vs what stays in dev
 */

const fs = require('fs');
const path = require('path');

function printTree(dir, prefix = '', isLast = true, maxDepth = 4, depth = 0) {
  if (depth > maxDepth) return;

  const items = fs.readdirSync(dir).sort((a, b) => {
    const aIsDir = fs.statSync(path.join(dir, a)).isDirectory();
    const bIsDir = fs.statSync(path.join(dir, b)).isDirectory();
    return bIsDir - aIsDir || a.localeCompare(b);
  });

  const filtered = items.filter(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    // Hide common ignored dirs
    if (['node_modules', '.git', 'coverage', 'dist'].includes(item)) {
      return false;
    }
    
    return true;
  });

  filtered.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const isDir = stat.isDirectory();
    const isLastItem = index === filtered.length - 1;
    
    const marker = isLastItem ? '└── ' : '├── ';
    const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
    
    // Determine what gets distributed
    let distributed = '';
    if (item === 'dist') {
      distributed = ' [DISTRIBUTED via HACS]';
    } else if (['node_modules', '.git', 'coverage'].includes(item)) {
      distributed = ' [DEV ONLY]';
    } else if (item === 'src') {
      distributed = ' [SOURCE]';
    } else if (['.github', 'hacs.json'].includes(item)) {
      distributed = ' [METADATA]';
    }
    
    console.log(prefix + marker + item + distributed);
    
    if (isDir && depth < maxDepth) {
      printTree(fullPath, nextPrefix, isLastItem, maxDepth, depth + 1);
    }
  });
}

console.log('Timeline Calendar Card - Repository Structure\n');
console.log('timeline-calendar/');
printTree('.');

console.log('\n\n📦 What HACS Distributes:\n');
console.log('When installed via HACS, users get:');
console.log('  ✓ dist/timeline-calendar-card.js (compiled card)');
console.log('  ✓ README.md (documentation)');
console.log('  ✓ hacs.json (metadata)\n');

console.log('Users do NOT get:');
console.log('  ✗ src/ (source code)');
console.log('  ✗ node_modules/ (dependencies)');
console.log('  ✗ .github/ (CI/CD workflows)');
console.log('  ✗ Test files');
console.log('  ✗ Build configuration\n');

console.log('Installation path in Home Assistant:');
console.log('  config/www/community/timeline-calendar/\n');
