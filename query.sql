SELECT child.id, child.name, parent.parent_name
FROM child
LEFT JOIN parent
ON child.id = parent.id;