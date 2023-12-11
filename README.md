# Sorting and Searching Algorithms

## Overview

This repository contains implementations of popular sorting and searching algorithms in both Python and Java. The algorithms included are Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Binary Search. Each algorithm is explained in detail below.

## Table of Contents

1. [Selection Sort](#selection-sort)
2. [Insertion Sort](#insertion-sort)
3. [Merge Sort](#merge-sort)
4. [Quick Sort](#quick-sort)
5. [Binary Search](#binary-search)

## Selection Sort

### Description

Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the array into a sorted and an unsorted region. In each iteration, it finds the minimum element in the unsorted region and swaps it with the first element of the unsorted region.

### Complexity

- Time Complexity: O(n^2)
- Space Complexity: O(1)

### Implementation

- [Javascript](selectionSort.js)

## Insertion Sort

### Description

Insertion Sort is another simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

### Complexity

- Time Complexity: O(n^2)
- Space Complexity: O(1)

### Implementation

- [Javascript](insertionSort.js)

## Merge Sort

### Description

Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts each half, and then merges the sorted halves.

### Complexity

- Time Complexity: O(n log n)
- Space Complexity: O(n)

### Implementation

- [Javascript](mergeSort.js)


## Quick Sort

### Description

Quick Sort is another efficient divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.

### Complexity

- Time Complexity: O(n log n)
- Space Complexity: O(log n) - average, O(n) - worst

### Implementation

- [Javascript](quickSort.js)

## Binary Search

### Description

Binary Search is an efficient search algorithm that works on sorted arrays. It repeatedly divides the search space in half until the target element is found or the search space is empty.

### Complexity

- Time Complexity: O(log n)
- Space Complexity: O(1)

### Implementation

- [Javascript](binarySearch.js)
