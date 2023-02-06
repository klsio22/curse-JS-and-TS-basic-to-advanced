/* Index Signatures */

const object : {
  readonly keyA: string, // can't change key only read
  keyB: string,
  keyC?: string,
  [key:string]:unknown
} = {
  keyA:'valueA',
  keyB:'valueB',
}

object.keyB = 'Other valueA'
object.keyD = 'Other valueD'


console.log(object.keyD)

