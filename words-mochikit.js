NotFound
AdapterRegistry
register(name, check, wrap[, override])
match(obj[, ...])
unregister(name)
NamedError
arrayEqual(self, arr)
average(lst[, ...])
bind(func, self[, arg, ...])
bindLate(func, self[, arg, ...])
bindMethods(self)
bool(value)
camelize(str)
clone(obj)
compare(a, b)
compose(f1, f2, ..., fN)
concat(lst[, ...])
counter(n=1)
extend(self, obj, skip=0)
evalJSON(jsonText)
filter(fn, lst)
findValue(lst, value, start=0, end=lst.length)
findIdentical(lst, value, start=0, end=lst.length)
flattenArguments(arg[, ...])
flattenArray(lst)
forwardCall(name)
isArrayLike(obj[, ...])
isDateLike(obj[, ...])
isEmpty(obj[, ...])
isNotEmpty(obj[, ...])
isNull(obj[, ...])
isUndefinedOrNull(obj[, ...])
itemgetter(name)
items(obj)
keyComparator(key[, ...])
keys(obj)
listMax(lst)
listMin(lst)
listMinMax(which, lst)
map(fn, lst[, ...])
mean(lst[, ...])
median(lst[, ...])
merge(obj[, ...])
method(self, func, ...)
methodcaller(name[, args...])
nameFunctions(namespace)
noop()
objEqual(a, b)
nodeWalk(node, visitor)
objMax(obj[, ...])
objMin(obj[, ...])
operator
parseQueryString(encodedString[, useArrays=false])
partial(func, arg[, ...])
queryString(names, values)
registerComparator(name, check, comparator[, override])
registerJSON(name, check, simplifier[, override])
registerRepr(name, check, wrap[, override])
repr(obj)
reverseKeyComparator(key)
serializeJSON(anObject)
setdefault(self, obj[, ...])
typeMatcher(typ[, ...])
update(self, obj[, ...])
updatetree(self, obj[, ...])
urlEncode(unencoded)
values(obj)
xfilter(fn, obj[, ...])
xmap(fn, obj[, ...)
zip(p, q, ...)

AlreadyCalledError
BrowserComplianceError
CancelledError
GenericError
XMLHttpRequestError
Deferred()
addBoth(func[, ...])
addCallback(func[, ...])
addCallbacks(callback, errback)
addErrback(func[, ...])
setFinalizer(func[, ...])
callback([result])
cancel()
errback([result])
Deferred
DeferredLock()
acquire()
release()
DeferredList(list, [fireOnOneCallback, fireOnOneErrback, consumeErrors, canceller])
callLater(seconds, func[, args...])
doXHR(url[, {option: value, ...}])
doSimpleXMLHttpRequest(url[, queryArguments...])
evalJSONRequest(req)
fail([result])
gatherResults(deferreds)
getXMLHttpRequest()
maybeDeferred(func[, argument...])
loadJSONDoc(url[, queryArguments...])
sendXMLHttpRequest(req[, sendContent])
succeed([result])
wait(seconds[, res])

addElementClass(element, className)
addLoadEvent(func)
addToCallStack(target, path, func[, once])
appendChildNodes(node[, childNode[, ...]])
insertSiblingNodesBefore(node[, siblingNode[, ...]])
insertSiblingNodesAfter(node[, siblingNode[, ...]])
createDOM(name[, attrs[, node[, ...]]])
createDOMFunc(tag[, attrs[, node[, ...]]])
currentDocument()
currentWindow()
emitHTML(dom[, lst])
escapeHTML(s)
focusOnLoad(element)
formContents(elem=document.body)
getElement(id[, ...])
getElementsByTagAndClassName(tagName, className, parent=document)
getFirstElementByTagAndClassName(tagName, className, parent=document)
getFirstParentByTagAndClassName(elem, tagName='*', className=null)
getNodeAttribute(node, attr)
hasElementClass(element, className[, ...])
isChildNode(node, maybeParent)
registerDOMConverter(name, check, wrap[, override])
removeElement(node)
removeElementClass(element, className)
removeEmptyTextNodes(node)
replaceChildNodes(node[, childNode[, ...]])
scrapeText(node[, asArray=false])
setElementClass(element, className)
setNodeAttribute(node, attr, value)
swapDOM(dest, src)
swapElementClass(element, fromClass, toClass)
toggleElementClass(className[, element[, ...]])
toHTML(dom)
updateNodeAttributes(node, attrs)
withWindow(win, func)
withDocument(doc, func)
computedStyle(htmlElement, cssProperty, mozillaEquivalentCSS)
elementDimensions(element)
elementPosition(element[, relativeTo={x: 0, y: 0}])
getViewportDimensions()
hideElement(element, ...)
makeClipping(element)
makePositioned(element)
setElementDimensions(element, dimensions[, units='px'])
setElementPosition(element, position[, units='px'])
setDisplayForElement(display, element[, ...])
setOpacity(element, opacity)
showElement(element, ...)
undoClipping(element, overflow)
undoPositioned(element)
Coordinates(x, y)
Dimensions(w, h)

StopIteration
applymap(fun, seq[, self])
chain(p, q[, ...])
count(n=0)
cycle(p)
dropwhile(pred, seq)
every(iterable, func)
exhaust(iterable)
forEach(iterable, func[, self])
groupby(iterable[, keyfunc])
groupby_as_array(iterable[, keyfunc])
iextend(lst, iterable)
ifilter(pred, seq)
ifilterfalse(pred, seq)
imap(fun, p, q[, ...])
islice(seq, [start,] stop[, step])
iter(iterable[, sentinel])
izip(p, q[, ...])
list(iterable)
next(iterator)
range([start,] stop[, step])
reduce(fn, iterable[, initial])
registerIteratorFactory(name, check, iterfactory[, override])
repeat(elem[, n])
reversed(iterable)
some(iterable, func)
sorted(iterable[, cmp])
sum(iterable, start=0)
takewhile(pred, seq)
tee(iterable, n=2)

connect(src, signal, dest[, func])
disconnect(ident)
disconnectAll(src[, signal, ...])
disconnectAllTo(dest[, func])
signal(src, signal, ...)
event()
src()
type()
target()
modifier()
stopPropagation()
preventDefault()
stop()
key()
mouse()
relatedTarget()
confirmUnload(msg)

