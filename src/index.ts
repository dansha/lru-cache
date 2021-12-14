import {lruCache} from './lru-cache'; 


function sleep(ms:number) {
       return new Promise(resolve => setTimeout(resolve, ms));
    }

const test= new lruCache(6);

test.setValue ("k1", JSON.parse('{"aaa":"K1"}'));
test.setValue ("k2", JSON.parse('{"aaa":"K2"}'));
test.setValue ("k3", JSON.parse('{"aaa":"K3"}'));
test.setValue ("k4", JSON.parse('{"aaa":"K4"}'));
test.setValue ("k5", JSON.parse('{"aaa":"K5"}'));
test.setValue ("k6", JSON.parse('{"aaa":"K6"}'));
test.setValue ("k7", JSON.parse('{"aaa":"K7"}'));
test.setValue ("k8", JSON.parse('{"aaa":"K8"}'));
sleep(2000);
test.setValue ("k9", JSON.parse('{"aaa":"K9"}'));

console.log(`k3: ${JSON.stringify   ( test.getValue("k3"))}`);

console.log(test.getAll());