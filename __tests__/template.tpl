<ul>
${
  list.map(l => (
    `<li>user: ${l.user}, site: ${l.site}</li>`
  )).join('\n')
}
</ul>
