import React from "react";

const AlgoArea=({algo})=>{
    return(
        <>
            {algo==="Bubble Sort" ? 
                <div className="explain">
                    <h4>Bubble Sort</h4>
                    <strong><hr></hr></strong>
                    We Compare adjacent elements and see if their order is wrong. If yes, then swap them.
                    <br/><br/>
                    <h4>Pseudocode</h4>
                    <strong><hr></hr></strong>
                    <div className="code">
                    bubbleSort(arr[],total_elements)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;for i=0 to total_elements-1 do:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;swapped = false<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for j=0 to total_elements-i-2 do:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compare the adjacent elements<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if arr[j]>arr[j+1] then <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(arr[j],arr[j+1])<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end for <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;if(not swapped) then<br/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;break<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end for<br/>
                    end<br/>
                    </div>
                </div>:
                algo==="Quick Sort"?
                <div className="explain">
                    <h4>Quick Sort</h4>
                    <strong><hr></hr></strong>
                    This Sorting process follows the divide and conquer algorithm.<br/>
                    Divide: breaking down the algorithms into subproblems,<br/>
                    Conquer: solving the subproblems,
                    <br/>Combine: combinig the results back together.<br/>
                    In this Algo, pivot element is choosen first, then partitions 
                    the array around the picked element.
                    <br/><br/>
                    <h4>Pseudocode</h4>
                    <strong><hr></hr></strong>
                    <div className="code">
                    <h5>Partition Algorithm</h5>
                    partition(array a,start,end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;pivot=a[end]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i=start-1<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; for j=start to end-1 do<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(pivot>a[j])<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then i = i+1<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap a[i] with a[j]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end for<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;swap a[i+1] with a[end]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;return i+1<br/>
                    <br/>
                    <h5>Quick Sort Function</h5>
                    quickSort(array a, start, end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;if(end>start)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p=partition(a,start,end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(a,start,p-1)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(a,p+1,end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                    end<br/>
                    </div>
                </div>:
                algo==="Insertion Sort"?
                <div className="explain">
                    <h4>Insertion Sort</h4>
                    <strong><hr></hr></strong>
                    In this sorting, the array is virtually split into a sorted and an unsorted part.
                    Values from the unsorted part are picked and placed at the correct position in the sorted part.
                    <br/><br/>
                    <h4>Pseudocode</h4>
                    <strong><hr></hr></strong>
                    <div className="code">
                    insertionSort(a[],total_elements)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i, key, j<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;for i=1 to total_elements-1 do:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key =a[i]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j = i-1<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while(j>=0 and a[j]>key) do:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[j+1]=a[j] <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j=j-1<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end while<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;a[j+1]=key<br/>
                    end<br/>
                    </div>
                </div>:
                algo==="Merge Sort"?
                <div className="explain">
                    <h4>Merge Sort</h4>
                    <strong><hr></hr></strong>
                    This Sorting process follows the divide and conquer algorithm.<br/>
                    Divide: breaking down the algorithms into subproblems,<br/>
                    Conquer: solving the subproblems,
                    <br/>Combine: combinig the results back together.<br/>
                    In this Algo, the list divides into sublists and these are again divided further until the list cannot be divided.<br/>
                    Then, we combine the pair of on element lists or arrays into two- element lisrs, sorting them in the process.
                    <br/>, continue process till the whole list or array get sorted.
                    <br/><br/>
                    <h4>Pseudocode</h4>
                    <strong><hr></hr></strong>
                    <div className="code">
                    <h5>Merge Algorithm</h5>
                    void merge(array a,beg,mid,end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i,j,k<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;n1 = mid-beg+1 and n2 = end-mid<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;left[n1] and right[n2]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; for i=0 to n1-1 do<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left = a[beg+i]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; for j=0 to n2-1 do<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right = a[mid+1+j]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i=0 , j=0, k=beg<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;while(n1>i && n2>j)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(right[j]>=left[i])<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k]=left[i]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k]=right[j]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j++<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end else<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;k++<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end while<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;while(n1>i)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k]=left[i]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++, k++<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end while<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;while(n2>j)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a[k]=right[j]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j++, k++<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end while<br/>
                    end<br/>
                    <br/>
                    <h5>Merge Sort Function</h5>
                    mergeSort(array a, beg, end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;if(end>beg)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mid = (beg+end)/2<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mergeSort(a,beg,mid)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mergeSort(a,mid+1,end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;merge(a,beg,mid,end)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                    end<br/>
                    </div>
                </div>:
                algo==="Selection Sort"?
                <div className="explain">
                    <h4>Selection Sort</h4>
                    <strong><hr></hr></strong>
                    The algorithm sorts the array by repeatedly finding the minimum element from unsorted part and putting 
                    it at the begining.
                    <br/><br/>
                    <h4>Pseudocode</h4>
                    <bold><hr></hr></bold>
                    <div className="code">
                    selectionSort(a[],total_elements)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i, j, min_idx<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;for i=0 to total_elements-1 do:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_idx=i<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for j=i+1 to total_elements-1 do:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(a[min_idx]>a[j]) <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_idx=j<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(a[min_idx],a[i])<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end for<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;end for<br/>
                    end<br/>
                    </div>
                </div>:
                <div></div>
    
       
            }
        </>
    );

}
export default AlgoArea;