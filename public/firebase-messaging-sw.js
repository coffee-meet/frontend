self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});

self.addEventListener("push", function (e) {
  console.log("push: ", e.data.json());
  if (!e.data.json()) {
    return;
  }

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
  console.log("push: ", { resultData, notificationTitle, notificationOptions });
  //indexedDB에 상태 저장하는 기능 추가
  saveDataToIndexedDB("isMatchingSuccess", true);
});

// IndexedDB에 데이터를 저장하는 함수
function saveDataToIndexedDB(key, value) {
  const request = indexedDB.open("matching-database");

  request.onupgradeneeded = function (event) {
    const db = event.target.result;

    db.createObjectStore("my-store", { autoIncrement: true });
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    const tx = db.transaction("my-store", "readwrite");
    const store = tx.objectStore("my-store");
    store.put(value, key);

    tx.oncomplete = function () {
      db.close();
    };
  };

  request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event.target.error);
  };
}

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();

  // eslint-disable-next-line no-undef
  event.waitUntil(clients.openWindow(url));
});
