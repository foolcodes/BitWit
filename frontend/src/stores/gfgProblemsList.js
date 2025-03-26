const problems = [
  {
    title: "Find Missing and Repeating element",
    link: "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/",
    difficulty: "Easy",
  },
  {
    title: "Stock Buy and Sell - Max one Transaction Allowed",
    link: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",
    difficulty: "Easy",
  },
  {
    title: "Remove Duplicates in a Sorted Array",
    link: "https://www.geeksforgeeks.org/remove-duplicates-sorted-array/",
    difficulty: "Easy",
  },
  {
    title: "Convert Array into Zig-Zag fashion",
    link: "https://www.geeksforgeeks.org/convert-array-into-zig-zag-fashion/",
    difficulty: "Easy",
  },
  {
    title: "Find third largest element",
    link: "https://www.geeksforgeeks.org/third-largest-element-array-distinct-elements/",
    difficulty: "Easy",
  },
  {
    title: "Check Pair Sum in a Sorted and Rotated Array",
    link: "https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/",
    difficulty: "Medium",
  },
  {
    title: "Sort an array of 0s, 1s, and 2s",
    link: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/",
    difficulty: "Medium",
  },
  {
    title: "Rotate Array K times",
    link: "https://www.geeksforgeeks.org/array-rotation/",
    difficulty: "Medium",
  },
  {
    title: "Find Majority Element",
    link: "https://www.geeksforgeeks.org/majority-element/",
    difficulty: "Medium",
  },
  {
    title: "Maximum Subarray Sum – Kadane’s Algorithm",
    link: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    difficulty: "Medium",
  },
  {
    title: "Stock Buy and Sell – Multiple Transaction Allowed",
    link: "https://www.geeksforgeeks.org/stock-buy-sell/",
    difficulty: "Medium",
  },
  {
    title: "Next Permutation",
    link: "https://www.geeksforgeeks.org/next-permutation/",
    difficulty: "Medium",
  },
  {
    title: "Maximum Product Subarray",
    link: "https://www.geeksforgeeks.org/maximum-product-subarray/",
    difficulty: "Medium",
  },
  {
    title: "Maximize i*arr[i] among all Rotations of Array",
    link: "https://www.geeksforgeeks.org/maximum-sum-iarri-among-rotations-given-array/",
    difficulty: "Medium",
  },
  {
    title: "Rearrange Array in Max Min Form",
    link: "https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form-set-2-o1-extra-space/",
    difficulty: "Medium",
  },
  {
    title: "Find Smallest Missing Positive Number",
    link: "https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/",
    difficulty: "Medium",
  },
  {
    title: "Minimum Jumps to Reach End",
    link: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/",
    difficulty: "Medium",
  },
  {
    title: "Trapping Rain Water",
    link: "https://www.geeksforgeeks.org/trapping-rain-water/",
    difficulty: "Hard",
  },
  {
    title: "Maximum Circular Subarray Sum",
    link: "https://www.geeksforgeeks.org/maximum-contiguous-circular-sum/",
    difficulty: "Hard",
  },
  {
    title: "Closest Palindrome Number",
    link: "https://www.geeksforgeeks.org/closest-palindrome-number-whose-absolute-difference-min/",
    difficulty: "Hard",
  },
  {
    title: "Stock Buy and Sell – Max 2 Transactions Allowed",
    link: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
    difficulty: "Hard",
  },
  {
    title: "Maximum Meetings in One Room",
    link: "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
    difficulty: "Easy",
  },
  {
    title: "Chocolate Distribution Problem",
    link: "https://www.geeksforgeeks.org/chocolate-distribution-problem/",
    difficulty: "Easy",
  },
  {
    title: "Find a Pair with the given difference",
    link: "https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/",
    difficulty: "Easy",
  },
  {
    title: "Form the Largest Number",
    link: "https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/",
    difficulty: "Medium",
  },
  {
    title: "Merge Two Sorted Arrays Without Extra Space",
    link: "https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/",
    difficulty: "Medium",
  },
  {
    title: "Count Inversions of an Array",
    link: "https://www.geeksforgeeks.org/inversion-count-in-array-using-merge-sort/",
    difficulty: "Medium",
  },
  {
    title: "Meeting Rooms – II",
    link: "https://www.geeksforgeeks.org/meeting-rooms-find-minimum-meeting-rooms/",
    difficulty: "Medium",
  },
  {
    title: "Merge Overlapping Intervals",
    link: "https://www.geeksforgeeks.org/merging-intervals/",
    difficulty: "Medium",
  },
  {
    title: "Minimum Swaps to Sort",
    link: "https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/",
    difficulty: "Medium",
  },
  {
    title: "Minimize the Maximum Difference between the Heights",
    link: "https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/",
    difficulty: "Medium",
  },
  {
    title: "Find k largest elements in an array (Quick Sort Method)",
    link: "https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/",
    difficulty: "Medium",
  },
  {
    title: "3 Sum – Triplet Sum in Array",
    link: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/",
    difficulty: "Medium",
  },
  {
    title: "4 Sum – All Quadruples",
    link: "https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/",
    difficulty: "Medium",
  },
  {
    title: "First Repeated Character",
    link: "https://www.geeksforgeeks.org/find-the-first-repeated-character-in-a-string/",
    difficulty: "Easy",
  },
  {
    title: "Reverse Words",
    link: "https://www.geeksforgeeks.org/reverse-words-in-a-given-string/",
    difficulty: "Easy",
  },
  {
    title: "Roman Number to Integer",
    link: "https://www.geeksforgeeks.org/roman-number-to-integer/",
    difficulty: "Easy",
  },
  {
    title: "Check Anagram",
    link: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
    difficulty: "Easy",
  },
  {
    title: "Remove Duplicates",
    link: "https://www.geeksforgeeks.org/remove-duplicates-from-a-given-string/",
    difficulty: "Easy",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    link: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/",
    difficulty: "Medium",
  },
  {
    title: "Rabin-Karp Algorithm",
    link: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
    difficulty: "Medium",
  },
  {
    title: "Z algorithm",
    link: "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/",
    difficulty: "Medium",
  },
  {
    title: "Longest Palindromic Substring",
    link: "https://www.geeksforgeeks.org/longest-palindromic-substring/",
    difficulty: "Medium",
  },
  {
    title: "Look-and-Say Sequence",
    link: "https://www.geeksforgeeks.org/look-and-say-sequence/",
    difficulty: "Medium",
  },
  {
    title: "Number to English Words",
    link: "https://www.geeksforgeeks.org/program-to-convert-a-given-number-to-words-set-2/",
    difficulty: "Medium",
  },
  {
    title: "KMP Algorithm",
    link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
    difficulty: "Hard",
  },
  {
    title: "Minimum Characters to Add at Front for Palindrome",
    link: "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/",
    difficulty: "Hard",
  },
  {
    title: "Smallest Window Containing All Characters of Another String",
    link: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
    difficulty: "Hard",
  },
  {
    title: "At least K Occurences",
    link: "https://www.geeksforgeeks.org/count-all-elements-in-the-array-which-appears-at-least-k-times-after-their-first-occurrence/",
    difficulty: "Easy",
  },
  {
    title: "Common Elements in Two Arrays",
    link: "https://www.geeksforgeeks.org/common-elements-in-two-arrays/",
    difficulty: "Easy",
  },
  {
    title: "Longest Subarray with 0 Sum",
    link: "https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/",
    difficulty: "Medium",
  },
  {
    title: "Count Distinct Elements In Every Window of Size K",
    link: "https://www.geeksforgeeks.org/count-distinct-elements-in-every-window-of-size-k/",
    difficulty: "Medium",
  },
  {
    title: "4 Sum – Count Quadruplets with Given Sum",
    link: "https://www.geeksforgeeks.org/count-quadruplets-with-sum-k-from-given-array/",
    difficulty: "Medium",
  },
  {
    title: "Check If Array Pair Sums Divisible by k",
    link: "https://www.geeksforgeeks.org/check-if-an-array-can-be-divided-into-pairs-whose-sum-is-divisible-by-k/",
    difficulty: "Medium",
  },
  {
    title: "Longest Consecutive Subsequence",
    link: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/",
    difficulty: "Medium",
  },
  {
    title: "Count Subarrays having Sum K",
    link: "https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/",
    difficulty: "Medium",
  },
  {
    title: "Longest Subarray With Sum K",
    link: "https://www.geeksforgeeks.org/longest-sub-array-sum-k/",
    difficulty: "Medium",
  },
  {
    title: "Longest Subarray With Sum Divisible By K",
    link: "https://www.geeksforgeeks.org/longest-subarray-sum-divisible-k/",
    difficulty: "Medium",
  },
  {
    title: "Sort according to an Array",
    link: "https://www.geeksforgeeks.org/sort-array-according-order-defined-another-array/",
    difficulty: "Medium",
  },
  {
    title: "Group Anagrams Together",
    link: "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/",
    difficulty: "Medium",
  },
  {
    title: "Count Maximum Points on Same Line",
    link: "https://www.geeksforgeeks.org/count-maximum-points-on-same-line/",
    difficulty: "Hard",
  },
  {
    title: "LFU cache",
    link: "https://www.geeksforgeeks.org/least-frequently-used-lfu-cache-implementation/",
    difficulty: "Hard",
  },
  {
    title: "Minimum Window Substring",
    link: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
    difficulty: "Hard",
  },
  {
    title: "Binary Search Algorithm",
    link: "https://www.geeksforgeeks.org/binary-search/",
    difficulty: "Easy",
  },
  {
    title: "N-th root of a number",
    link: "https://www.geeksforgeeks.org/n-th-root-number/",
    difficulty: "Easy",
  },
  {
    title: "Single Element in a Sorted Array",
    link: "https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-a-sorted-array/",
    difficulty: "Medium",
  },
  {
    title: "Search in a Sorted and Rotated Array",
    link: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
    difficulty: "Medium",
  },
  {
    title: "Sum of Middle Elements of two Sorted Arrays",
    link: "https://www.geeksforgeeks.org/sum-of-middle-elements-of-two-sorted-arrays/",
    difficulty: "Medium",
  },
  {
    title: "First and Last Occurrence",
    link: "https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/",
    difficulty: "Medium",
  },
  {
    title: "Median of two Sorted Arrays",
    link: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
    difficulty: "Hard",
  },
  {
    title: "Median in a Row-wise sorted Matrix",
    link: "https://www.geeksforgeeks.org/find-median-row-wise-sorted-matrix/",
    difficulty: "Hard",
  },
  {
    title: "Allocate Minimum Pages",
    link: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/",
    difficulty: "Hard",
  },
  {
    title: "Aggressive Cows",
    link: "https://www.geeksforgeeks.org/assign-stalls-to-k-cows-to-maximize-the-minimum-distance-between-them/",
    difficulty: "Hard",
  },
  {
    title: "Find the row with maximum number of 1s",
    link: "https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/",
    difficulty: "Easy",
  },
  {
    title: "Rotate an Image 90 Degree Clockwise",
    link: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
    difficulty: "Medium",
  },
  {
    title: "Spirally traversing a matrix",
    link: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/",
    difficulty: "Medium",
  },
  {
    title: "Search in a Sorted Matrix",
    link: "https://www.geeksforgeeks.org/search-element-sorted-matrix/",
    difficulty: "Medium",
  },
  {
    title: "Set Matrix Rows and Columns to Zeroes",
    link: "https://www.geeksforgeeks.org/set-matrix-rows-and-columns-to-zeroes/",
    difficulty: "Medium",
  },
  {
    title: "Max rectangle in Binary Matrix",
    link: "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/",
    difficulty: "Hard",
  },
  {
    title: "Find all Unique Subsets",
    link: "https://www.geeksforgeeks.org/find-all-unique-subsets-of-a-given-set/",
    difficulty: "Medium",
  },
  {
    title: "Generate Sums of all Subsets",
    link: "https://www.geeksforgeeks.org/print-sums-subsets-given-set/",
    difficulty: "Medium",
  },
  {
    title: "Tower of Hanoi",
    link: "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/",
    difficulty: "Medium",
  },
  {
    title: "Generate all Unique Permutations",
    link: "https://www.geeksforgeeks.org/print-all-permutations-of-a-string-with-duplicates-allowed-in-input-string/",
    difficulty: "Medium",
  },
  {
    title: "Rat in a Maze",
    link: "https://www.geeksforgeeks.org/rat-in-a-maze-problem-when-movement-in-all-possible-directions-is-allowed/",
    difficulty: "Medium",
  },
  {
    title: "Combination Sum (Repeated Selection)",
    link: "https://www.geeksforgeeks.org/combinational-sum/",
    difficulty: "Medium",
  },
  {
    title: "Combination Sum II (Single Selection)",
    link: "https://www.geeksforgeeks.org/all-unique-combinations-whose-sum-equals-to-k/",
    difficulty: "Medium",
  },
  {
    title: "Generate all Palindromic Partitions",
    link: "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
    difficulty: "Medium",
  },
  {
    title: "Generate Valid IP Addresses",
    link: "https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/",
    difficulty: "Medium",
  },
  {
    title: "Word Search",
    link: "https://www.geeksforgeeks.org/check-if-a-word-exists-in-a-grid-or-not/",
    difficulty: "Medium",
  },
  {
    title: "N-Queen Problem",
    link: "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
    difficulty: "Hard",
  },
  {
    title: "Solve Sudoku",
    link: "https://www.geeksforgeeks.org/sudoku-backtracking-7/",
    difficulty: "Hard",
  },
  {
    title: "Word Break",
    link: "https://www.geeksforgeeks.org/word-break-problem-using-backtracking/",
    difficulty: "Hard",
  },
  {
    title: "Validate Parentheses",
    link: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
    difficulty: "Easy",
  },
  {
    title: "Implement two Stacks in an Array",
    link: "https://www.geeksforgeeks.org/implement-two-stacks-in-an-array/",
    difficulty: "Medium",
  },
  {
    title: "The Stock Span Problem",
    link: "https://www.geeksforgeeks.org/the-stock-span-problem/",
    difficulty: "Medium",
  },
  {
    title: "Next Greater Element",
    link: "https://www.geeksforgeeks.org/next-greater-element/",
    difficulty: "Medium",
  },
  {
    title: "Get Min from Stack",
    link: "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/",
    difficulty: "Medium",
  },
  {
    title: "Evaluation of Postfix Expression",
    link: "https://www.geeksforgeeks.org/evaluation-of-postfix-expression/",
    difficulty: "Medium",
  },
  {
    title: "Longest Valid Parentheses Substring",
    link: "https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/",
    difficulty: "Medium",
  },
  {
    title: "Largest Rectangular Area in a Histogram",
    link: "https://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-using-stack/",
    difficulty: "Hard",
  },
  {
    title: "Maximum of Minimum for Every Window Size",
    link: "https://www.geeksforgeeks.org/find-the-maximum-of-minimums-for-every-window-size-in-a-given-array/",
    difficulty: "Hard",
  },
  {
    title: "Implement K Stacks in an Array",
    link: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
    difficulty: "Hard",
  },
  {
    title: "Stream First Non-repeating",
    link: "https://www.geeksforgeeks.org/find-first-non-repeating-character-stream-characters/",
    difficulty: "Medium",
  },
  {
    title: "Maximum of all subarrays of size K",
    link: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
    difficulty: "Medium",
  },
  {
    title: "Longest Subarray with Absolute Difference Less than or Equal to K",
    link: "https://www.geeksforgeeks.org/longest-subarray-in-which-absolute-difference-between-any-two-element-is-not-greater-than-x/",
    difficulty: "Medium",
  },
  {
    title: "Shortest Subarray with Sum at Least K",
    link: "https://www.geeksforgeeks.org/smallest-subarray-from-a-given-array-with-sum-greater-than-or-equal-to-k/",
    difficulty: "Hard",
  },
  {
    title: "Stack using Queues",
    link: "https://www.geeksforgeeks.org/implement-stack-using-queue/",
    difficulty: "Easy",
  },
  {
    title: "Queue using Stacks",
    link: "https://www.geeksforgeeks.org/queue-using-stacks/",
    difficulty: "Easy",
  },
  {
    title: "Connect Ropes with Minimum Cost",
    link: "https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/",
    difficulty: "Easy",
  },
  {
    title: "Implement Binary Heap",
    link: "https://www.geeksforgeeks.org/binary-heap/",
    difficulty: "Medium",
  },
  {
    title: "Rearrange String to Avoid Adjacent Duplicates",
    link: "https://www.geeksforgeeks.org/rearrange-characters-string-no-two-adjacent/",
    difficulty: "Medium",
  },
  {
    title: "Kth Largest Element",
    link: "https://www.geeksforgeeks.org/kth-largest-element-in-an-array/",
    difficulty: "Medium",
  },
  {
    title: "Merge k Sorted Arrays",
    link: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/",
    difficulty: "Medium",
  },
  {
    title: "Top K Frequent Elements",
    link: "https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/",
    difficulty: "Medium",
  },
  {
    title: "Merge K Sorted Linked Lists",
    link: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
    difficulty: "Medium",
  },
  {
    title: "Kth Smallest Element in Matrix",
    link: "https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array/",
    difficulty: "Medium",
  },
  {
    title: "Sort a K Sorted Array",
    link: "https://www.geeksforgeeks.org/nearly-sorted-algorithm/",
    difficulty: "Medium",
  },
  {
    title: "Find Median in Stream",
    link: "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/",
    difficulty: "Hard",
  },
  {
    title: "K-th Bit is Set or Not",
    link: "https://www.geeksforgeeks.org/check-whether-k-th-bit-set-not/",
    difficulty: "Easy",
  },
  {
    title: "Swap 2 Numbers using XOR",
    link: "https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/",
    difficulty: "Easy",
  },
  {
    title: "Check if a Number is a Power of 2",
    link: "https://www.geeksforgeeks.org/program-to-find-whether-a-given-number-is-power-of-2/",
    difficulty: "Easy",
  },
  {
    title: "Rightmost Set Bit",
    link: "https://www.geeksforgeeks.org/position-of-rightmost-set-bit/",
    difficulty: "Easy",
  },
  {
    title: "Rightmost Different Bit",
    link: "https://www.geeksforgeeks.org/position-rightmost-different-bit/",
    difficulty: "Easy",
  },
  {
    title: "Toggle Bits in Given Range",
    link: "https://www.geeksforgeeks.org/toggle-bits-given-range/",
    difficulty: "Easy",
  },
  {
    title: "Single in Couples",
    link: "https://www.geeksforgeeks.org/alone-in-couple/",
    difficulty: "Easy",
  },
  {
    title: "Division without *, /, or %",
    link: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
    difficulty: "Medium",
  },
  {
    title: "Count Set Bits from 1 to N",
    link: "https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n-set-2/",
    difficulty: "Medium",
  },
  {
    title: "Generate Subsets using Bit Manipulation",
    link: "https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/",
    difficulty: "Medium",
  },
  {
    title: "Find Two Numbers with Odd Occurrences",
    link: "https://www.geeksforgeeks.org/find-the-two-numbers-with-odd-occurences-in-an-unsorted-array/",
    difficulty: "Medium",
  },
  {
    title: "Maximum Subset XOR",
    link: "https://www.geeksforgeeks.org/find-maximum-subset-xor-given-set/",
    difficulty: "Hard",
  },
  {
    title: "Find Middle of the Linked List",
    link: "https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/",
    difficulty: "Easy",
  },
  {
    title: "Reverse a Linked List",
    link: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
    difficulty: "Easy",
  },
  {
    title: "Kth from End of Linked List",
    link: "https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/",
    difficulty: "Easy",
  },
  {
    title: "Pairwise Swap Elements of Linked List",
    link: "https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/",
    difficulty: "Easy",
  },
  {
    title: "Sort a linked list of 0s, 1s and 2s",
    link: "https://www.geeksforgeeks.org/sort-linked-list-0s-1s-2s-changing-links/",
    difficulty: "Medium",
  },
  {
    title: "Rotate a Linked List K times",
    link: "https://www.geeksforgeeks.org/rotate-a-linked-list/",
    difficulty: "Medium",
  },
  {
    title: "Intersection in Y Shaped Lists",
    link: "https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/",
    difficulty: "Medium",
  },
  {
    title: "Detect Loop in Linked List",
    link: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
    difficulty: "Medium",
  },
  {
    title: "Remove loop in Linked List",
    link: "https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/",
    difficulty: "Medium",
  },
  {
    title: "Flattening a Linked List",
    link: "https://www.geeksforgeeks.org/flattening-a-linked-list/",
    difficulty: "Medium",
  },
  {
    title: "Merge two Sorted Linked Lists",
    link: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
    difficulty: "Medium",
  },
  {
    title: "Add Two Numbers Represented as Linked List",
    link: "https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-list/",
    difficulty: "Medium",
  },
  {
    title: "Palindrome Linked List",
    link: "https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/",
    difficulty: "Medium",
  },
  {
    title: "Linked List Group Reverse",
    link: "https://www.geeksforgeeks.org/reverse-a-linked-list-in-groups-of-given-size/",
    difficulty: "Hard",
  },
  {
    title: "Clone a Linked List with Next and Random Pointer",
    link: "https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/",
    difficulty: "Hard",
  },
  {
    title: "LRU Cache",
    link: "https://www.geeksforgeeks.org/lru-cache-implementation-using-double-linked-lists/",
    difficulty: "Hard",
  },
  {
    title: "Level Order Traversal in Spiral Form",
    link: "https://www.geeksforgeeks.org/level-order-traversal-in-spiral-form/",
    difficulty: "Easy",
  },
  {
    title: "Height of Binary Tree",
    link: "https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/",
    difficulty: "Easy",
  },
  {
    title: "Balanced Tree Check",
    link: "https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/",
    difficulty: "Easy",
  },
  {
    title: "Check Symmetric Tree",
    link: "https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/",
    difficulty: "Easy",
  },
  {
    title: "Check Identical Trees",
    link: "https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/",
    difficulty: "Easy",
  },
  {
    title: "Left View of Binary Tree",
    link: "https://www.geeksforgeeks.org/print-left-view-binary-tree/",
    difficulty: "Easy",
  },
  {
    title: "Top View of Binary Tree",
    link: "https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Bottom View of Binary Tree",
    link: "https://www.geeksforgeeks.org/bottom-view-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Diagonal Tree Traversal",
    link: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Vertical Tree Traversal",
    link: "https://www.geeksforgeeks.org/vertical-order-traversal-of-binary-tree-using-map/",
    difficulty: "Medium",
  },
  {
    title: "LCA in Binary Tree",
    link: "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",
    difficulty: "Medium",
  },
  {
    title: "Tree Boundary Traversal",
    link: "https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Diameter of a Binary Tree",
    link: "https://www.geeksforgeeks.org/diameter-of-a-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Connect Nodes of Levels",
    link: "https://www.geeksforgeeks.org/connect-nodes-level-level-order-traversal/",
    difficulty: "Medium",
  },
  {
    title: "Serialize and Deserialize a Binary Tree",
    link: "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Construct Tree from Inorder & Preorder",
    link: "https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/",
    difficulty: "Medium",
  },
  {
    title: "Maximum Path Sum between 2 Nodes",
    link: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/",
    difficulty: "Medium",
  },
  {
    title: "Max Path Sum between 2 Leaf Nodes",
    link: "https://www.geeksforgeeks.org/find-maximum-path-sum-two-leaves-binary-tree/",
    difficulty: "Hard",
  },
  {
    title: "Convert Binary Tree to Doubly Linked List",
    link: "https://www.geeksforgeeks.org/convert-binary-tree-to-doubly-linked-list-using-inorder-traversal/",
    difficulty: "Hard",
  },
  {
    title: "Check for BST",
    link: "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
    difficulty: "Easy",
  },
  {
    title: "LCA in BST",
    link: "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/",
    difficulty: "Easy",
  },
  {
    title: "Sorted Array to BST",
    link: "https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/",
    difficulty: "Easy",
  },
  {
    title: "Kth Largest Element in BST",
    link: "https://www.geeksforgeeks.org/kth-largest-element-in-bst-when-modification-to-bst-is-not-allowed/",
    difficulty: "Easy",
  },
  {
    title: "Ceil in BST",
    link: "https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/",
    difficulty: "Medium",
  },
  {
    title: "Largest BST",
    link: "https://www.geeksforgeeks.org/largest-bst-binary-tree-set-2/",
    difficulty: "Medium",
  },
  {
    title: "Merge two BST ‘s",
    link: "https://www.geeksforgeeks.org/merge-two-bsts-with-limited-extra-space/",
    difficulty: "Medium",
  },
  {
    title: "Preorder to BST",
    link: "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/",
    difficulty: "Medium",
  },
  {
    title: "Predecessor and Successor in BST",
    link: "https://www.geeksforgeeks.org/inorder-predecessor-successor-given-key-bst/",
    difficulty: "Medium",
  },
  {
    title: "Binary Search Tree Iterator",
    link: "https://www.geeksforgeeks.org/implement-binary-search-treebst-iterator/",
    difficulty: "Medium",
  },
  {
    title: "Delete a Node from BST",
    link: "https://www.geeksforgeeks.org/deletion-in-binary-search-tree/",
    difficulty: "Medium",
  },
  {
    title: "Balance a Binary Search Tree",
    link: "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
    difficulty: "Medium",
  },
  {
    title: "Minimize the Sum of Product",
    link: "https://www.geeksforgeeks.org/minimize-sum-product-two-arrays-permutations-allowed/",
    difficulty: "Easy",
  },
  {
    title: "Largest Number Possible",
    link: "https://www.geeksforgeeks.org/find-the-largest-number-with-given-number-of-digits-and-sum-of-digits/",
    difficulty: "Easy",
  },
  {
    title: "Minimum Number of Coins",
    link: "https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/",
    difficulty: "Easy",
  },
  {
    title: "Assign Cookies",
    link: "https://www.geeksforgeeks.org/assign-cookies/",
    difficulty: "Easy",
  },
  {
    title: "Gas Station",
    link: "https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/",
    difficulty: "Medium",
  },
  {
    title: "Activity Selection",
    link: "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/",
    difficulty: "Medium",
  },
  {
    title: "Fractional Knapsack",
    link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
    difficulty: "Medium",
  },
  {
    title: "Job Sequencing",
    link: "https://www.geeksforgeeks.org/job-sequencing-problem/",
    difficulty: "Medium",
  },
  {
    title: "Huffman Encoding",
    link: "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/",
    difficulty: "Hard",
  },
  {
    title: "Ways to Reach the Nth Stair",
    link: "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",
    difficulty: "Medium",
  },
  {
    title: "House Robber II",
    link: "https://www.geeksforgeeks.org/maximum-sum-in-circular-array-such-that-no-two-elements-are-adjacent/",
    difficulty: "Medium",
  },
  {
    title: "Coin Change (Minimum Coins)",
    link: "https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/",
    difficulty: "Medium",
  },
  {
    title: "Coin Change (Count Ways)",
    link: "https://www.geeksforgeeks.org/coin-change-dp-7/",
    difficulty: "Medium",
  },
  {
    title: "Longest Common Substring",
    link: "https://www.geeksforgeeks.org/longest-common-substring-dp-29/",
    difficulty: "Medium",
  },
  {
    title: "Longest Increasing Subsequence",
    link: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
    difficulty: "Medium",
  },
  {
    title: "Longest Common Subsequence",
    link: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
    difficulty: "Medium",
  },
  {
    title: "0 – 1 Knapsack Problem",
    link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
    difficulty: "Medium",
  },
  {
    title: "Partition Equal Subset Sum",
    link: "https://www.geeksforgeeks.org/partition-problem-dp-18/",
    difficulty: "Medium",
  },
  {
    title: "Minimum Insertions to Form Palindrome",
    link: "https://www.geeksforgeeks.org/minimum-insertions-to-form-a-palindrome-dp-28/",
    difficulty: "Medium",
  },
  {
    title: "Maximize The Cut Segments",
    link: "https://www.geeksforgeeks.org/maximize-the-number-of-segments-of-length-p-q-and-r/",
    difficulty: "Medium",
  },
  {
    title: "Maximum Path Sum in Matrix",
    link: "https://www.geeksforgeeks.org/maximum-path-sum-matrix/",
    difficulty: "Medium",
  },
  {
    title: "Rod Cutting",
    link: "https://www.geeksforgeeks.org/cutting-a-rod-dp-13/",
    difficulty: "Medium",
  },
  {
    title: "Egg Dropping Puzzle",
    link: "https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/",
    difficulty: "Medium",
  },
  {
    title: "Word Break",
    link: "https://www.geeksforgeeks.org/word-break-problem-dp-32/",
    difficulty: "Medium",
  },
  {
    title: "Optimal Strategy For A Game",
    link: "https://www.geeksforgeeks.org/optimal-strategy-for-a-game-dp-31/",
    difficulty: "Medium",
  },
  {
    title: "Wildcard Pattern Matching",
    link: "https://www.geeksforgeeks.org/wildcard-pattern-matching/",
    difficulty: "Medium",
  },
  {
    title: "Edit Distance",
    link: "https://www.geeksforgeeks.org/edit-distance-dp-5/",
    difficulty: "Medium",
  },
  {
    title: "Matrix Chain Multiplication",
    link: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
    difficulty: "Hard",
  },
  {
    title: "Palindromic Partitioning",
    link: "https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/",
    difficulty: "Hard",
  },
  {
    title: "Boolean Parenthesization",
    link: "https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/",
    difficulty: "Hard",
  },
  {
    title: "DFS of Graph",
    link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
    difficulty: "Easy",
  },
  {
    title: "BFS of Graph",
    link: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
    difficulty: "Easy",
  },
  {
    title: "Detect Cycle in Undirected Graph",
    link: "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/",
    difficulty: "Medium",
  },
  {
    title: "Detect Cycle in a Directed Graph",
    link: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
    difficulty: "Medium",
  },
  {
    title: "Detect a Negative Cycle",
    link: "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
    difficulty: "Medium",
  },
  {
    title: "Topological Sorting",
    link: "https://www.geeksforgeeks.org/topological-sorting/",
    difficulty: "Medium",
  },
  {
    title: "Shortest Path in Directed Acyclic Graph",
    link: "https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/",
    difficulty: "Medium",
  },
  {
    title: "Kahn’s Algorithm",
    link: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/",
    difficulty: "Medium",
  },
  {
    title: "Dijkstra Algorithm",
    link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
    difficulty: "Medium",
  },
  {
    title: "Bellman-Ford Algorithm",
    link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
    difficulty: "Medium",
  },
  {
    title: "Floyd Warshall Algorithm",
    link: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/",
    difficulty: "Medium",
  },
  {
    title: "Prim’s Algorithm",
    link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
    difficulty: "Medium",
  },
  {
    title: "Kruskal’s Algorithm",
    link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    difficulty: "Medium",
  },
  {
    title: "Euler Path and Circuit",
    link: "https://www.geeksforgeeks.org/eulerian-path-and-circuit/",
    difficulty: "Medium",
  },
  {
    title: "Hamiltonian Path and Circuit",
    link: "https://www.geeksforgeeks.org/hamiltonian-cycle/",
    difficulty: "Medium",
  },
  {
    title: "Kosaraju’s Algorithm",
    link: "https://www.geeksforgeeks.org/connectivity-in-a-directed-graph/",
    difficulty: "Hard",
  },
  {
    title: "Tarjan’s Algorithm",
    link: "https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/",
    difficulty: "Hard",
  },
  {
    title: "Bridges in Graph",
    link: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
    difficulty: "Hard",
  },
  {
    title: "Articulation Points in Graph",
    link: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
    difficulty: "Hard",
  },
  {
    title: "Disjoint Set (Union Find Algorithm)",
    link: "https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/",
    difficulty: "Hard",
  },
  {
    title: "Mother Vertex",
    link: "https://www.geeksforgeeks.org/find-a-mother-vertex-in-a-graph/",
    difficulty: "Medium",
  },
  {
    title: "Rotten Oranges",
    link: "https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/",
    difficulty: "Medium",
  },
  {
    title: "Flood fill Algorithm",
    link: "https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/",
    difficulty: "Medium",
  },
  {
    title: "Replace O’s with X’s",
    link: "https://www.geeksforgeeks.org/given-matrix-o-x-replace-o-x-surrounded-x/",
    difficulty: "Medium",
  },
  {
    title: "Steps by Knight",
    link: "https://www.geeksforgeeks.org/minimum-steps-reach-target-knight/",
    difficulty: "Medium",
  },
  {
    title: "Bipartite Graph",
    link: "https://www.geeksforgeeks.org/bipartite-graph/",
    difficulty: "Medium",
  },
  {
    title: "Number of Islands",
    link: "https://www.geeksforgeeks.org/find-the-number-of-islands-using-dfs/",
    difficulty: "Medium",
  },
  {
    title: "Clone an Undirected Graph",
    link: "https://www.geeksforgeeks.org/clone-an-undirected-graph/",
    difficulty: "Medium",
  },
  {
    title: "M-Coloring Problem",
    link: "https://www.geeksforgeeks.org/m-coloring-problem/",
    difficulty: "Medium",
  },
  {
    title: "Alien Dictionary",
    link: "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/",
    difficulty: "Hard",
  },
  {
    title: "Circle of Strings",
    link: "https://www.geeksforgeeks.org/given-array-strings-find-strings-can-chained-form-circle/",
    difficulty: "Hard",
  },
  {
    title: "Minimum Cost Path",
    link: "https://www.geeksforgeeks.org/minimum-cost-path-left-right-bottom-moves-allowed/",
    difficulty: "Hard",
  },
  {
    title: "Insert, Search and Delete in Trie",
    link: "https://www.geeksforgeeks.org/introduction-to-trie-data-structure-and-algorithm-tutorials/",
    difficulty: "Medium",
  },
  {
    title: "Longest Common Prefix of Strings",
    link: "https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/",
    difficulty: "Medium",
  },
  {
    title: "Prefix Suffix String",
    link: "https://www.geeksforgeeks.org/counting-common-prefix-suffix-strings-in-two-lists/",
    difficulty: "Medium",
  },
  {
    title: "Word Break (Trie)",
    link: "https://www.geeksforgeeks.org/word-break-problem-trie-solution/",
    difficulty: "Hard",
  },
  {
    title: "Phone Directory",
    link: "https://www.geeksforgeeks.org/implement-a-phone-directory/",
    difficulty: "Hard",
  },
  {
    title: "Maximum XOR Subarray",
    link: "https://www.geeksforgeeks.org/find-the-maximum-subarray-xor-in-a-given-array/",
    difficulty: "Hard",
  },
];

export const gfgSdeSheet = () => problems;
